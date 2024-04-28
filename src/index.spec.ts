import { calculateRisk, PatientData } from './index';

describe('calculateRisk', () => {

    it('should return "X" for a patient aged X with BMI X', () => {
        const patientData: PatientData = {
            age: 99,
            bmi: 99
        };
        const result = calculateRisk(patientData);
        expect(result).toBe('High');
    });

});











// it('should return "High" for a patient aged 60 with BMI 30', () => {
//     const patientData: PatientData = {
//         age: 60,
//         bmi: 30
//     };
//     const result = calculateRisk(patientData);
//     expect(result).toBe('High');
// });
//
// it('should return "Low" for a patient aged 30 with BMI 20', () => {
//     const patientData: PatientData = {
//         age: 30,
//         bmi: 20
//     };
//     const result = calculateRisk(patientData);
//     expect(result).toBe('Low');
// });
