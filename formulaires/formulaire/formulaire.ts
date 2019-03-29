import invariant from "src/utils/invariant";
import ConstraintCollection from "../constraints/constraint-collection";
import Field from "./field/field";

export default class Formulaire {

    private name: string;
    private fields: Field[];
    private constraints: ConstraintCollection;

    public constructor(name: string, fields: Field[], constraints: ConstraintCollection) {
        this.name = name;
        this.fields = fields;
        this.constraints = constraints;
    }

    public getFieldByName(name: string): Field {
        const field: Field | undefined = this.fields.find((field: Field) => field.isName(name));
        invariant(!field, `Field with name ${name} does not exists on form`);

        return field as Field;
    }

    public hasRequired(): boolean {
        return !!this.fields.find((field: Field) => field.isRequired());
    }

    public allFieldsRequired(): boolean {
        return this.fields.reduce((result: boolean, field: Field) => result && field.isRequired(), true);
    }
}