import Name from "../../api/name";
import FieldMapper from "../../mapper/field-mapper/field-mapper";

export default class NameFieldMapper implements FieldMapper {

    public map(source: any, to: any): any {
        Object.keys(source).forEach((key: string) => {
            if (source[key] instanceof Name
                && to.lastName === undefined
                && to.firstName === undefined
            ) {
                to.lastName = source[key].lastName;
                to.firstName = source[key].firstName;
            }
        });
        return to;
    };
}