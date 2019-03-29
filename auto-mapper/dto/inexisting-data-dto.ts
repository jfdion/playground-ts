export default class InexistingDataDto {
    // Property order must be the same as constructor parameters
    readonly team: string;
    readonly nom: string;
    readonly prenom: string;
    readonly motherMaidenName: string;

    constructor(team: string, nom: string, prenom: string, motherMaidenName: string) {
        this.team = team;
        this.nom = nom;
        this.prenom = prenom;
        this.motherMaidenName = motherMaidenName;
    }
}