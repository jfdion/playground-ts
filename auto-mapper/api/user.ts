import Nom from "./nom";
import Timestamp from "./timestamp";

export default class User {
    private nom: Nom;
    private password: string;
    private email: string;
    private age: number;
    private dead: boolean;
    private created: Timestamp;
    private updated: Timestamp;

    constructor(nom: Nom, age: number, dead: boolean, password: string, email: string) {
        this.nom = nom;
        this.password = password;
        this.email = email;
        this.age = age;
        this.dead = dead
        this.created = new Timestamp(new Date('2019-01-03'));
        this.updated = new Timestamp(new Date('2019-01-15'));
    }
}
