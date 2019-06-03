export default class Distance {

    private static readonly NUMBER_OF_METERS_IN_A_KILOMETER = 1000;

    private distanceInMeters: number;

    private constructor(distanceInMeters: number) {
        this.distanceInMeters = distanceInMeters
    }

    public static createFromKilometers(km: number): Distance {
        return new Distance(km / Distance.NUMBER_OF_METERS_IN_A_KILOMETER);
    }

    public add(distance: Distance): Distance {
        return new Distance(this.distanceInMeters + distance.distanceInMeters);
    }

    public toMeters(): number {
        return this.distanceInMeters;
    }

    public toKilometers(): number {
        return this.distanceInMeters / Distance.NUMBER_OF_METERS_IN_A_KILOMETER;
    }
}