import Name from "./name";
import Timestamp from "./timestamp";

export default class User {
    private name: Name;
    private password: string;
    private email: string;
    private age: number;
    private dead: boolean;
    private created: Timestamp;
    private updated: Timestamp;

    constructor(name: Name, age: number, dead: boolean, password: string, email: string) {
        this.name = name;
        this.password = password;
        this.email = email;
        this.age = age;
        this.dead = dead
        this.created = new Timestamp(new Date('2019-01-03'));
        this.updated = new Timestamp(new Date('2019-01-15'));
    }
}
