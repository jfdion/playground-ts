import LegAddedEvent from "src/ddd/domain/flight/events/leg-added-event";
import FlightCreatedEvent from "../../domain/flight/events/flight-created-event";
import Flight from "./../../domain/flight/flight";
import FlightRepository from "./../../domain/flight/flight-repository";
import EventHandler from "./../../shared-kernel/events/event-handler";


export default class FlightEventHandler implements EventHandler {

    private flightRepository: FlightRepository;

    constructor(flightRepository: FlightRepository) {
        this.flightRepository = flightRepository;
    }

    handle(event: FlightCreatedEvent | LegAddedEvent): void {
        this.flightRepository.save(event.getEntity() as Flight)
    }
}
