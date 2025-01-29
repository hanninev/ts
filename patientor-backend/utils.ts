import { z } from 'zod';
import { Gender, NewPatientEntry } from './types/types';

/*
const isString = (text: unknown): text is string => {
    return typeof text === 'string' || text instanceof String;
};

const parseString = (name: unknown): string => {
    if (!name || !isString(name)) {
        throw new Error('Incorrect or missing comment');
    }

    return name;
}; */

/* const parseGender = (gender: unknown): Gender => {
    if (!gender || !isString(gender) || !isGender(gender)) {
        throw new Error('Incorrect or missing weather: ' + gender);
    }
    return gender;
};

const isGender = (param: string): param is Gender => {
    return Object.values(Gender).map(v => v.toString()).includes(param);
};  */

export const newPatientSchema = z.object({
    name: z.string(),
    dateOfBirth: z.string(),
    gender: z.nativeEnum(Gender),
    occupation: z.string(),
    ssn: z.string()
});

export const toNewPatientEntry = (object: any): NewPatientEntry => {
    return newPatientSchema.parse(object);
};

export default toNewPatientEntry;