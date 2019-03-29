import FieldMapper from "./field-mapper";

export default class NumberFieldMapper implements FieldMapper {

    public map(source: any, to: any): any {
        Object.keys(source).forEach((key: string) => {
            if (typeof source[key] === 'number'
                && to[key] === undefined
            ) {
                to[key] = source[key]
            }
        });
        return to;
    }

}