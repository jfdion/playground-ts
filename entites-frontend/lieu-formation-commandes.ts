import Commande from "./commande";
import { LieuFormationEntite } from "./lieu-formation-entite";

export class ModifierNomLieuCommande implements Commande<LieuFormationEntite> {
    nom: string;

    executer(cible: LieuFormationEntite) {
        if (this.nom === '') { throw new Error('Le nom doit être renseigné'); }

        cible.nom(this.nom);
    }
}

export class ModifierLibelleRecherche implements Commande<LieuFormationEntite> {
    libelle: string;

    executer(cible: LieuFormationEntite) {
        if (this.libelle === '') { throw new Error('Le libelle doit être renseigné'); }

        cible.libelleRecherche(this.libelle);
    }
}