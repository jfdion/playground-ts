import Commande from './commande';

export default class Entite {

    protected listeCommandesCourante: Commande<this>[] = [];

    appliquerCommande(commande: Commande<this>): void {
        commande.executer(this);
        this.listeCommandesCourante.push(commande);
    }

    get getListeCommandes(): Commande<this>[] {
        return this.listeCommandesCourante;
    }
}