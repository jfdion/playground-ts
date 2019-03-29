export const countOddNumbers: (numbers: number[]) => number = (numbers: number[]) => {
    return numbers.reduce((sum, number) => sum + (number % 2), 0);
}

export const countEvenNumbers: (numbers: number[]) => number = (numbers: number[]) => {
    return numbers.reduce((sum, number) => sum +  (1 - (number % 2)), 0);
}