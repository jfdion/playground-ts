const uuidv4 = require('uuid/v4');

export default class Id {
    private id: string;

    constructor(id?: string) {
        this.id = id || uuidv4();
    }

    public toString(): string {
        return this.id;
    }
}