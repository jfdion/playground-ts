import CostCalculationStrategy from "../cost/cost-calculation-strategy";
import Distance from "../distance/distance";
import Money from "../money/money";
import FlightName from "./flight-name";
import Leg from "./leg/leg";

export default class Flight {

    private name: FlightName;
    private legs: Leg[];

    contructor(name: FlightName, legs: Leg[] = []) {
        this.name = name;
        this.legs = legs;
    }

    public addLeg(leg: Leg) {
        this.legs.push(leg);
    }

    public totalFlightLength(): Distance {
        return this.legs.reduce((accumulator: Distance, leg: Leg) => {
            return leg.addLengthTo(accumulator);
        }, Distance.createFromKilometers(0));
    }

    public calculateCost(costCalculationStrategy: CostCalculationStrategy): Money {
        return costCalculationStrategy.calulate({ distance: this.totalFlightLength(), legsCount: this.legs.length });
    }
}