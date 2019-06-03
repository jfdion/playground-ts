import FlightCreatedEvent from "../../domain/flight/events/flight-created-event";
import EventHandler from "./../../shared-kernel/events/event-handler";
import Logger from "./logger";

export default class LoggerEventHandler implements EventHandler {

    private logger: Logger;

    constructor(logger: Logger) {
        this.logger = logger;
    }

    handle(event: FlightCreatedEvent): void {
        this.logger.log(`${event.getEntity().toString()} has been created`)
    }

}