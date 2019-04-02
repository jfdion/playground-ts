import FieldMapper from "../mapper/field-mapper/field-mapper";
import FieldMapperComposite from "../mapper/field-mapper/field-mapper-composite";
import DeadAliveFieldMapper from "./user/dead-alive-field-mapper";
import NomFieldMapper from "./user/name-field-mapper";
import NameObjectFieldMapper from "./user/name-object-field-mapper";

export enum NameAs {
    KEYS = 'keys',
    OBJECT = 'object'
}

export default class FieldMapperFactory {

    public static createUserFieldMapper(nameAsObject: NameAs = NameAs.KEYS): FieldMapper {
        const UserFieldMapper: FieldMapperComposite = new FieldMapperComposite();

        UserFieldMapper.addMapper(new DeadAliveFieldMapper());
        if (nameAsObject === NameAs.OBJECT) {
            UserFieldMapper.addMapper(new NameObjectFieldMapper());
        } else {
            UserFieldMapper.addMapper(new NomFieldMapper());
        }

        return UserFieldMapper;
    }
}