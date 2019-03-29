export const notEmpty: Function = (value: string, message: string = ''): ValidationResult => {
    return [value !== '', buildReturnMessage(message, `${value} must not be equal to ''.`)];
}

export const hasMinLength: Function = (value: string, length: number = 0, message: string = ''): ValidationResult => {
    return [value.length >= length, buildReturnMessage(message, `${value} must have a length of ${length} or greater`)];
}