import Field, { FieldConfig } from "./field";

export default class TextField implements Field {

    private label: string;
    private name: string;
    private value: string;
    private required: boolean;

    public constructor(config: FieldConfig) {
        this.label = config.label;
        this.name = config.name;
        this.value = config.value ? config.value : '';
        this.required = config.required ? config.required : false;

    }

    public isRequired(): boolean {
        return false;
    }

    public isName(name: string): boolean {
        return this.name === name;
    }
}