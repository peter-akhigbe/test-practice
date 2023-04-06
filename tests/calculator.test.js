import calculator from '../functions/calculator';

describe('calculator', () => {
    test('add', () => {
        expect(calculator.add(1, 2)).toBe(3);
        expect(calculator.add(2, 2)).toBe(4);
        expect(calculator.add(5, 5)).toBe(10);
    });
    test('subtract', () => {
        expect(calculator.subtract(2, 1)).toBe(1);
        expect(calculator.subtract(3, 1)).toBe(2);
        expect(calculator.subtract(20, 1)).toBe(19);
    });
    test('multiply', () => {
        expect(calculator.multiply(2, 3)).toBe(6);
        expect(calculator.multiply(3, 3)).toBe(9);
        expect(calculator.multiply(5, 5)).toBe(25);
    });
    test('divide', () => {
        expect(calculator.divide(6, 3)).toBe(2);
        expect(calculator.divide(30, 5)).toBe(6);
        expect(calculator.divide(25, 5)).toBe(5);
    });
});
