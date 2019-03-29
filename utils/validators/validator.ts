type ValidationResult = [boolean, string];

const buildReturnMessage = (message: string, defaultMessage: string): string => {
    return (message) ? message : defaultMessage;
}