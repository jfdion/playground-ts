export default class Timestamp {
    private timestamp: Date;

    constructor(timestamp: Date) {
        this.timestamp = timestamp;
    }

    toString(): string {
        return this.timestamp.toISOString();
    }
}