import Entity from "./../../domain/entity";

export default class DomainEvent<T> {
    private entity: Entity;
    private params: T;

    constructor(entity: Entity, params: T) {
        this.entity = entity;
        this.params = params;
    }

    public getEntity(): Entity {
        return this.entity;
    }

    public getParams(): T {
        return this.params;
    }
}