import Entity from "../entity";
import EventBus from "./../../shared-kernel/events/event-bus";
import CostCalculationStrategy from "./../cost/cost-calculation-strategy";
import Distance from "./../distance/distance";
import Money from "./../money/money";
import FlightCreatedEvent from "./events/flight-created-event";
import LegAddedEvent from "./events/leg-added-event";
import FlightName from "./flight-name";
import Leg from "./leg/leg";

export default class Flight extends Entity {

    private name: FlightName;
    private legs: Leg[];

    constructor(name: FlightName, legs: Leg[] = []) {
        super();
        this.name = name;
        this.legs = legs;
        EventBus.dispatch(new FlightCreatedEvent(this, { name: this.name, legs: this.legs }));
    }

    public addLeg(leg: Leg) {
        this.legs.push(leg);
        EventBus.dispatch(new LegAddedEvent(this, { leg }));
    }

    public totalFlightLength(): Distance {
        return this.legs.reduce((accumulator: Distance, leg: Leg) => {
            return leg.addLengthTo(accumulator);
        }, Distance.createFromKilometers(0));
    }

    public calculateCost(costCalculationStrategy: CostCalculationStrategy): Money {
        return costCalculationStrategy.calulate({ distance: this.totalFlightLength(), legsCount: this.legs.length });
    }

    public toString(): string {
        const id: string = super.toString();
        return `${id} - ${this.name.toString()} flight with ${this.legs.length} legs`;
    }
}