import Flight from './../../domain/flight/flight';
import FlightRepository from './../../domain/flight/flight-repository';
import Id from './../../domain/id/id';

export default class FlightRepositoryInMemory implements FlightRepository {

    private flights: Map<string, Flight> = new Map();

    public save(flight: Flight): void {
        this.flights.set(flight.getId().toString(), flight);
    }

    public findOneById(id: Id): Flight {
        const flight = this.flights.get(id.toString());
        if (flight) { return flight; }
        throw new Error('Flight not found');
    }

    public findAll(): Flight[] {
        return Array.from(this.flights.values());
    }
}