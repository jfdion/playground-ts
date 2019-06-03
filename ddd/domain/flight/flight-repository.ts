import Id from './../id/id';
import Flight from "./flight";

export default interface FlightRepository {
    save(flight: Flight);
    findOneById(id: Id): Flight;
    findAll(): Flight[];
}