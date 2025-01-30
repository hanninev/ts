import { z } from "zod";
import { newPatientSchema } from "../utils";

export interface Entry {
}

export interface PatientEntry {
    id: string;
    name: string;
    dateOfBirth: string;
    ssn: string;
    gender: Gender;
    occupation: string;
    entries: Entry[];
}

export type NewPatientEntry = z.infer<typeof newPatientSchema>; 

export type NonSensitivePatientEntry = Omit<PatientEntry, 'ssn' | 'entries'>;

export interface DiagnoseEntry {
    code: string;
    name: string;
    latin?: string;
}

export enum Gender {
    Male = 'male',
    Female = 'female',
    Other = 'other',
  }