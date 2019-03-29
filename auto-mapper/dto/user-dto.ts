export default class UserDto {
    // Property order must be the same as constructor parameters
    readonly nom: string;
    readonly prenom: string;
    readonly age: number;
    readonly alive: boolean;
    readonly email: string;
    readonly created: string;

    constructor(nom: string, prenom: string, age: number, alive: boolean, email: string, created: string) {
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
        this.alive = alive;
        this.email = email;
        this.created = created;
    }
}