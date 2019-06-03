import DomainEvent from "./domain-event";
import EventHandler from "./event-handler";

export default class EventBus {

    private static eventsHandlers: Set<EventHandler> = new Set();

    static registerHandler(eventHandler: EventHandler) {
        EventBus.eventsHandlers.add(eventHandler);
    }

    static dispatch(event: DomainEvent<any>) {
        EventBus.eventsHandlers.forEach((eventHandler: EventHandler) => { eventHandler.handle(event) });
    }
}