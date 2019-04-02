import Nom from "../../api/name";
import FieldMapper from "./../../mapper/field-mapper/field-mapper";

export default class NomObjectFieldMapper implements FieldMapper {

    public map(source: any, to: any): any {
        Object.keys(source).forEach((key: string) => {
            if (source[key] instanceof Nom
                && to.nom === undefined
                && to.prenom === undefined
            ) {
                to.nom = { nom: source[key].nom, prenom: source[key].prenom };
            }
        });
        return to;
    };
}