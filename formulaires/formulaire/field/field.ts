export default interface Field {

    isRequired(): boolean;

    isName(name: string): boolean;
}

export type FieldConfig = {
    label: string;
    name: string;
    required?: boolean;
    value?: string;
}