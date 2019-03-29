function invariant(condition: boolean, message: string): void;
function invariant(validationResult: ValidationResult): void;
function invariant(conditionOrValidationResult: boolean | ValidationResult, message?: string) {
    let condition: boolean;
    if (typeof conditionOrValidationResult === 'boolean') {
        condition = conditionOrValidationResult;
    } else {
        [condition, message] = conditionOrValidationResult;
    }
    if (!!!condition) {
        throw Error(message);
    }
}

export default invariant;