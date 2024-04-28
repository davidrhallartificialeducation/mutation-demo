import { calculateBMI } from './index';

describe('calculateBMI', () => {

    it('should return "Underweight" for a person with weight 50kg and height 1.75m', () => {
        const result = calculateBMI(50, 1.75);
        expect(result).toBe('Underweight');
    });

    it('should return "Normal weight" for a person with weight 70kg and height 1.75m', () => {
        const result = calculateBMI(70, 1.75);
        expect(result).toBe('Normal weight');
    });

    it('should return "Overweight" for a person with weight 90kg and height 1.75m', () => {
        const result = calculateBMI(90, 1.75);
        expect(result).toBe('Overweight');
    });

    it('should return "Obesity" for a person with weight 140kg and height 1.75m', () => {
        const result = calculateBMI(140, 1.75);
        expect(result).toBe('Obesity');
    });

});