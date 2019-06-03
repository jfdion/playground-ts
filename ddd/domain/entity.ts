import Id from "./id/id";

export default class Entity {

    private id: Id;

    constructor() {
        this.id = new Id();
    }

    public getId(): Id {
        return this.id;
    }

    public toString(): string {
        return this.id.toString();
    }
}