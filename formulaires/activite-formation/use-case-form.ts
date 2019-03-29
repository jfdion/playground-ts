import Formulaire from "../formulaire/formulaire";
import ActiviteFormationFormulaire from "./activite-formation-formulaire";


const activteFormationFormulaire: ActiviteFormationFormulaire = new ActiviteFormationFormulaire();

const formulaire: Formulaire = activteFormationFormulaire.createForm();

formulaire.getFieldByName('nom');
// process l'affichage du champ nom

formulaire.getFieldByName('code');
// process l'affichage du champ code

formulaire.getFieldByName('unite');
// process l'affichage du champ unite
