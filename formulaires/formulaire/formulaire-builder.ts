import ConstraintCollection from "../constraints/constraint-collection";
import Field from "./field/field";
import Formulaire from "./formulaire";

export default class FormulaireBuilder {

    private name: string;
    private fields: Field[] = [];
    private constraints: ConstraintCollection = {};

    private constructor(formName: string) {
        this.name = formName;
    }

    public static create(formName: string): FormulaireBuilder {
        return new FormulaireBuilder(formName);
    }

    public addField(field: Field): FormulaireBuilder {
        if (this.fields.indexOf(field) === -1) {
            this.fields.push(field);
        }
        return this;
    }

    public withConstraints(constraints: ConstraintCollection): FormulaireBuilder {
        this.constraints = constraints;
        return this;
    }

    public build(): Formulaire {
        return new Formulaire(this.name, this.fields, this.constraints);
    }
}