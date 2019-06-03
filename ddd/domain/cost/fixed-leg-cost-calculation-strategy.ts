import Money from "../money/money";
import CostCalculationDto from "./cost-calculation-dto";
import CostCalculationStrategy from "./cost-calculation-strategy";

export default class FixedLegCostCalculationStrategy implements CostCalculationStrategy {

    public static readonly PRICE_PER_LEG: number = 225;

    calulate(costCalculationParams: CostCalculationDto): Money {
        if (!costCalculationParams.legsCount) {
            return new Money();
        }
        return new Money(FixedLegCostCalculationStrategy.PRICE_PER_LEG * costCalculationParams.legsCount);
    }

}