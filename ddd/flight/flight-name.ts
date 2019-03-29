export default class FlightName {

    private companyName: string;
    private code: string;

    constructor(companyName: string, code: string) {
        this.companyName = companyName;
        this.code = code;
    }

    public toString(): string {
        return `${this.companyName}-${this.code}`;
    }
}