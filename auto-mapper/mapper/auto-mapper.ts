import FieldMapper from "./field-mapper/field-mapper";
import FieldMapperComposite from "./field-mapper/field-mapper-composite";

export default class AutoMapper {

    private fieldMappers: FieldMapperComposite;

    constructor(mappersCollection: FieldMapper[] = []) {
        this.fieldMappers = new FieldMapperComposite();
        mappersCollection.forEach((mapper: FieldMapper) => this.fieldMappers.addMapper(mapper));
    }

    public map<T, U>(source: U, creator: { new(): T }, specificFieldMapper?: FieldMapper): T {
        const mappedData = this.mapData(source, specificFieldMapper);

        const properties = Object.keys(new creator());
        const data: Partial<T> = properties.reduce((acc: Partial<T>, property: string) => {
            acc[property] = (mappedData[property]);
            return acc;
        }, {});

        return Object.freeze(data) as T;
    }

    private mapData(source, specificFieldMapper?: FieldMapper): Record<string, any> {
        let mappedData: Record<string, any> = this.fieldMappers.map(source, {});
        if (specificFieldMapper) {
            mappedData = specificFieldMapper.map(source, mappedData);
        }
        return mappedData;
    }
}