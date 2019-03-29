import { countEvenNumbers, countOddNumbers } from "./count-odd-even-numbers";

describe(`Count odd numbers`, () => {
    test(`will return 0 if there is no odd numbers`, () => {
        const numbers: number[] = [2, 4, 6, 8]

        const result: number = countOddNumbers(numbers);

        expect(result).toBe(0);
    });

    test(`will return the right number of odd numbers`, () => {
        const numbers: number[] = [2, 3, 4, 5, 6];

        const result: number = countOddNumbers(numbers);

        expect(result).toBe(2);
    });
});

describe(`Count even numbers`, () => {
    test(`will return 0 if there is no odd numbers`, () => {
        const numbers: number[] = [3, 5, 7, 9]

        const result: number = countEvenNumbers(numbers);

        expect(result).toBe(0);
    });

    test(`will return the right number of odd numbers`, () => {
        const numbers: number[] = [2, 3, 4, 5, 6];

        const result: number = countEvenNumbers(numbers);

        expect(result).toBe(3);
    });
});