export interface PatientData {
    age: number;
    bmi: number;
}

export function calculateRisk(patientData: PatientData): string {
    if (patientData.age >= 60 || patientData.bmi >= 30) {
        return 'High';
    } else {
        return 'Low';
    }
}