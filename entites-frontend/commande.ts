import Entite from "./entite";

export default interface Commande<T extends Entite> {

    executer(cible: T): void;
}