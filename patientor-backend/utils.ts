import { Gender, NewPatientEntry } from './types/types';

const isString = (text: unknown): text is string => {
    return typeof text === 'string' || text instanceof String;
};

const parseString = (name: unknown): string => {
    if (!name || !isString(name)) {
        throw new Error('Incorrect or missing comment');
    }

    return name;
};

const parseGender = (gender: unknown): Gender => {
    if (!gender || !isString(gender) || !isGender(gender)) {
        throw new Error('Incorrect or missing weather: ' + gender);
    }
    return gender;
  };

const isGender = (param: string): param is Gender => {
    return Object.values(Gender).map(v => v.toString()).includes(param);
};

export const toNewPatientEntry = (object: any): NewPatientEntry => {
    const newEntry: NewPatientEntry = {
        name: parseString(object.name),
        dateOfBirth: parseString(object.dateOfBirth),
        gender: parseGender(object.gender),
        occupation: parseString(object.occupation),
        ssn: parseString(object.ssn)
    };


    return newEntry;
};

export default toNewPatientEntry;