import FieldMapper from "./field-mapper";

export default class FieldMapperComposite implements FieldMapper {

    private mappers: Set<FieldMapper> = new Set();

    public addMapper(mapper: FieldMapper): FieldMapperComposite {
        this.mappers.add(mapper);
        return this;
    }

    public map(source: any, to: any): any {
        this.mappers.forEach((mapper: FieldMapper) => {
            to = mapper.map(source, to);
        });

        return to;
    }
}