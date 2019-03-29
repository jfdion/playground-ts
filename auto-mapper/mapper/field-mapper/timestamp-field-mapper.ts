import Timestamp from "./../../api/timestamp";
import FieldMapper from "./field-mapper";

export default class TimestampFieldMapper implements FieldMapper {

    public map(source: any, to: any): any {
        Object.keys(source).forEach((key: string) => {
            if (source[key] instanceof Timestamp
                && to[key] === undefined
            ) {
                to[key] = source[key].toString();
            }
        });
        return to;
    }
}