import Nom from "../../api/nom";
import FieldMapper from "../../mapper/field-mapper/field-mapper";

export default class NomFieldMapper implements FieldMapper {

    public map(source: any, to: any): any {
        Object.keys(source).forEach((key: string) => {
            if (source[key] instanceof Nom
                && to.nom === undefined
                && to.prenom === undefined
            ) {
                to.nom = source[key].nom;
                to.prenom = source[key].prenom;
            }
        });
        return to;
    };
}