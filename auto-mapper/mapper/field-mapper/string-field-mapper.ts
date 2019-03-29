import FieldMapper from "./field-mapper";

export default class StringFieldMapper implements FieldMapper {

    public map(source: any, to: any): any {
        Object.keys(source).forEach((key: string) => {
            if (typeof source[key] === 'string'
                && to[key] === undefined
            ) {
                to[key] = source[key]
            }
        });
        return to;
    }

}