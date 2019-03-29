import ConstraintCollection from "../constraints/constraint-collection";
import TextField from "../formulaire/field/text-field";
import Formulaire from "../formulaire/formulaire";
import FormulaireBuilder from "../formulaire/formulaire-builder";

export default class ActiviteFormationFormulaire {

    public createForm(): Formulaire {
        return FormulaireBuilder.create('activite-formation-formulaire')
            .addField(new TextField({
                label: 'Titre',
                name: 'titre',
                value: '',
                required: true
            }))
            .addField(new TextField({
                label: 'Code',
                name: 'code',
                value: '',
                required: true
            }))
            .addField(new TextField({
                label: 'Unité',
                name: 'unite',
                value: ''
            }))
            .withConstraints(new ConstraintCollection())
            .build();
    }
}