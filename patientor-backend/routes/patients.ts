import express from 'express';
import { getPatients, addPatient } from '../services/patientService';
import toNewPatientEntry from '../utils';
import { z } from 'zod';

const router = express.Router();

router.get('/', (_req, res) => {
    res.send(getPatients());
});

router.post('/', (req, res) => {
    try {
        const newPatientEntry = toNewPatientEntry(req.body);
        const addedEntry = addPatient(newPatientEntry);
        res.json(addedEntry);
    } catch (error: unknown) {
        if (error instanceof z.ZodError) {
            res.status(400).send({ error: error.issues });
        } else {
            res.status(400).send({ error: 'unknown error' });
        }
    }
});

export default router;