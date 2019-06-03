export default class Money {

    private value: number;

    constructor(amount: number = 0.0) {
        this.value = amount;
    }

    public isSmallerThan(otherAmount: Money): boolean {
        return this.value < otherAmount.value
    }
}