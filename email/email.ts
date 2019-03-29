import invariant from "src/utils/invariant";
import { hasMinLength, notEmpty } from "src/utils/validators/string-validators";

export default class Email {

    private email: string;

    constructor(email: string) {
        invariant(notEmpty(email));
        invariant(this.isEmail(email));
        invariant(hasMinLength(email, 5));
        invariant(true, 'is always valid');

        this.email = email;
    }

    private isEmail(email: string): ValidationResult {
        return [true, `Email ${email} should be of format <prefix>@<domain>`];
    }
}