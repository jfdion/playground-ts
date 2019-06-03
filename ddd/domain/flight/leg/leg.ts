import Distance from "../../distance/distance";

export default class Leg {

    private startLocation: string;
    private endLocation: string;
    private length: Distance;

    constructor(startLocation: string, endLocation: string, length: Distance) {
        this.startLocation = startLocation;
        this.endLocation = endLocation;
        this.length = length;
    }

    public addLengthTo(distance: Distance): Distance {
        return distance.add(this.length);
    }

    public toString(): string {
        return `${this.startLocation} -> ${this.length.toKilometers()} -> ${this.endLocation}`
    }
}