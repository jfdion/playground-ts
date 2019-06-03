import Distance from './domain/distance/distance';
import Flight from './domain/flight/flight';
import FlightName from './domain/flight/flight-name';
import FlightRepository from './domain/flight/flight-repository';
import Leg from './domain/flight/leg/leg';
import FlightEventHandler from './infrastructure/flight/flight-event-handler';
import FlightRepositoryInMemory from './infrastructure/flight/flight-repository-in-memory';
import Logger from './infrastructure/logger/logger';
import LoggerEventHandler from './infrastructure/logger/logger-event-handler';
import EventBus from './shared-kernel/events/event-bus';

const flightRepository: FlightRepository = new FlightRepositoryInMemory()

EventBus.registerHandler(new LoggerEventHandler(new Logger()));
EventBus.registerHandler(new FlightEventHandler(flightRepository));

const flight: Flight = new Flight(new FlightName('Air TS', 'ats'));

flight.addLeg(new Leg('Québec', 'Montréal', Distance.createFromKilometers(250)));

console.log(flightRepository.findAll().map((flight: Flight) => flight.toString()));

