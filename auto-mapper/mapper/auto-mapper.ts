import FieldMapper from "./field-mapper/field-mapper";
import FieldMapperComposite from "./field-mapper/field-mapper-composite";

export default class AutoMapper {

    private fieldMappers: FieldMapperComposite;

    constructor(mappersCollection: FieldMapper[] = []) {
        this.fieldMappers = new FieldMapperComposite();
        mappersCollection.forEach((mapper: FieldMapper) => this.fieldMappers.addMapper(mapper));
    }

    public map(source: any, creator: { new(...args: any[]): any }, specificFieldMapper?: FieldMapper): any {
        const mappedData = this.mapData(source, specificFieldMapper);

        const properties = Object.keys(new creator());
        const data: any = properties.reduce((acc: any, property: any) => {
            acc.push(mappedData[property]);
            return acc;
        }, []);

        return new creator(...data);
    }

    private mapData(source, specificFieldMapper?: FieldMapper): object {
        let mappedData: any = this.fieldMappers.map(source, {});
        if (specificFieldMapper) {
            mappedData = specificFieldMapper.map(source, mappedData);
        }
        return mappedData;
    }
}