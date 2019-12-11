import Entite from "./entite";

interface LieuFormation {
    adresseCompleteHtml: string;
    libelleRecherche: string;
    nom: string;
    pays: string;
    provinceEtat: string;
    ville: string;
}

export interface LieuFormationConsultable {
    readonly getLibelleRecherche: string;
    readonly getNom: string;
    readonly getAdresseCompleteHtml: string;
    readonly getPays: string;
    readonly getProvinceEtat: string;
    readonly getVille: string;
    readonly getUrlConsulter: string;
}

export class LieuFormationEntite extends Entite implements LieuFormationConsultable {
    private adresseCompleteHtmlCourant: string;
    private libelleRechercheCourant: string;
    private nomCourant: string;
    private paysCourant: string;
    private provinceEtatCourant: string;
    private villeCourant: string;

    private constructor({ adresseCompleteHtml, libelleRecherche = '', nom = '', pays, provinceEtat, ville }) {
        super();
        this.adresseCompleteHtmlCourant = adresseCompleteHtml;
        this.libelleRechercheCourant = libelleRecherche;
        this.nomCourant = nom;
        this.paysCourant = pays;
        this.provinceEtatCourant = provinceEtat;
        this.villeCourant = ville;
    }

    public libelleRecherche(valeur: string): void {
        this.libelleRechercheCourant = valeur;
    }

    public nom(valeur: string): void {
        this.nomCourant = valeur;
    }

    public get getLibelleRecherche(): string {
        return this.libelleRechercheCourant
    }

    public get getNom(): string {
        return this.nomCourant;
    }

    public get getUrlConsulter(): string {
        return 'abc';
    }

    public get getAdresseCompleteHtml(): string {
        return this.adresseCompleteHtmlCourant
    }

    public get getPays(): string {
        return this.paysCourant;
    }

    public get getProvinceEtat(): string {
        return this.provinceEtatCourant;
    }

    public get getVille(): string {
        return this.villeCourant;
    }

    public static creerAvecLieuBE(lieuBE: LieuFormation): LieuFormationEntite {
        return new LieuFormationEntite({ ...lieuBE });
    }
}