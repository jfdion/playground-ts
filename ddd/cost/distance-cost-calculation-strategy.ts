import Money from "../money/money";
import CostCalculationDto from "./cost-calculation-dto";
import CostCalculationStrategy from "./cost-calculation-strategy";

export default class DistanceCostCalculationStrategy implements CostCalculationStrategy {

    public static readonly PRICE_PER_100_METERS: number = 0.12;

    calulate(costCalculationParams: CostCalculationDto): Money {
        if (!costCalculationParams.distance) {
            return new Money();
        }
        return new Money(DistanceCostCalculationStrategy.PRICE_PER_100_METERS * costCalculationParams.distance.toMeters());
    }

}