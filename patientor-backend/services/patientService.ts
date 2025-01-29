import patientData from '../data/patients';
import { NewPatientEntry, NonSensitivePatientEntry, PatientEntry } from '../types/types';
import { v1 as uuid } from 'uuid';

const patients: NonSensitivePatientEntry[] = patientData;

export const getPatients = (): NonSensitivePatientEntry[] => {
    return patients.map(p => ({ id: p.id, name: p.name, dateOfBirth: p.dateOfBirth, gender: p.gender, occupation: p.occupation }));
};

export const addPatient = (entry: NewPatientEntry): PatientEntry => {
    const newPatientEntry = {
        id: uuid(),
        ...entry
    };

    patients.push(newPatientEntry);
    return newPatientEntry;
};

export default {
    getPatients,
    addPatient
};