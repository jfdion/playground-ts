import FieldMapper from "../mapper/field-mapper/field-mapper";
import FieldMapperComposite from "../mapper/field-mapper/field-mapper-composite";
import DeadAliveFieldMapper from "./user/dead-alive-field-mapper";
import NomFieldMapper from "./user/nom-field-mapper";
import NomObjectFieldMapper from "./user/nom-object-field-mapper";

export default class FieldMapperFactory {

    public static createUserFieldMapper(nameAsObject: boolean = false): FieldMapper {
        const UserFieldMapper: FieldMapperComposite = new FieldMapperComposite();

        UserFieldMapper.addMapper(new DeadAliveFieldMapper());
        if (nameAsObject) {
            UserFieldMapper.addMapper(new NomObjectFieldMapper());
        } else {
            UserFieldMapper.addMapper(new NomFieldMapper());
        }

        return UserFieldMapper;
    }
}