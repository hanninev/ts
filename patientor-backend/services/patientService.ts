import patientData from '../data/patients';
import { NonSensitivePatientEntry } from '../types/types';

const patients: NonSensitivePatientEntry[] = patientData;

export const getPatients = (): NonSensitivePatientEntry[] => {
    return patients.map(p => ({ id: p.id, name: p.name, dateOfBirth: p.dateOfBirth, gender: p.gender, occupation: p.occupation }));
};

const addPatient = () => {
    return null;
};

export default {
    getPatients,
    addPatient
};