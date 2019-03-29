export default class IdentificationUserDto {
    // Property order must be the same as constructor parameters
    readonly nom: string;
    readonly prenom: string;

    constructor(nom: string, prenom: string) {
        this.nom = nom;
        this.prenom = prenom;
    }
}