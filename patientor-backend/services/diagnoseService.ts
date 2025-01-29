import { DiagnoseEntry } from "../types/types";
import diagnoseData from '../data/diagnoses';

const diagnoses: DiagnoseEntry[] = diagnoseData;

export const getDiagnoses = (): DiagnoseEntry[] => {
    return diagnoses;
};

export default {
    getDiagnoses,
};