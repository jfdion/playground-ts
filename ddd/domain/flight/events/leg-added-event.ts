import Leg from "../leg/leg";
import DomainEvent from "./../../../shared-kernel/events/domain-event";

export interface LegAddedEventParams {
    leg: Leg
}

export default class LegAddedEvent extends DomainEvent<LegAddedEventParams> {

}