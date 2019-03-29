import FieldMapper from "src/auto-mapper/mapper/field-mapper/field-mapper";

export default class DeadAliveFieldMapper implements FieldMapper {
    public map(source: any, to: any): any {
        Object.keys(source).forEach((key: string) => {
            if (typeof source['dead'] === 'boolean'
                && to['alive'] === undefined
            ) {
                to['alive'] = !source['dead']
            }
        });
        return to;
    }
}