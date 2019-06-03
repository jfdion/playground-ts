"use strict";
exports.__esModule = true;
var EventBus = /** @class */ (function () {
    function EventBus() {
    }
    EventBus.registerHandler = function (eventHandler) {
        EventBus.eventsHandlers.add(eventHandler);
    };
    EventBus.dispatch = function (event) {
        EventBus.eventsHandlers.forEach(function (eventHandler) { eventHandler.handle(event); });
    };
    EventBus.eventsHandlers = new Set();
    return EventBus;
}());
exports["default"] = EventBus;
