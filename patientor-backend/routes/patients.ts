import express from 'express';
import { getPatients, addPatient, getPatientsWithAllInfo } from '../services/patientService';
import toNewPatientEntry from '../utils';
import { z } from 'zod';

const router = express.Router();

router.get('/', (_req, res) => {
    res.send(getPatients());
});

router.get('/:id', (req, res) => {
    const { id } = req.params;

    const patient = getPatientsWithAllInfo().find((p) => p.id === id);

    if (!patient) {
        return res.status(404).json({ error: 'Patient not found' });
    }

    const patientWithEntries = {
        ...patient,
        entries: patient.entries || [],
    };

    return res.json(patientWithEntries);
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