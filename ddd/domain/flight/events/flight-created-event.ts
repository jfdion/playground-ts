import DomainEvent from "../../../shared-kernel/events/domain-event";
import FlightName from "../flight-name";
import Leg from "./../leg/leg";

export interface FlightCreatedEventParams {
    name: FlightName;
    legs: Leg[];
}

export default class FlightCreatedEvent extends DomainEvent<FlightCreatedEventParams> {

}