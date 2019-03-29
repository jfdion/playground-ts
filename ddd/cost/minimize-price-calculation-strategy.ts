import Money from "../money/money";
import CostCalculationDto from "./cost-calculation-dto";
import CostCalculationStrategy from "./cost-calculation-strategy";

export default class MinimizePriceCostCalculationStrategy implements CostCalculationStrategy {

    private strategies: Set<CostCalculationStrategy>;

    addCostCalculationStrategy(strategy: CostCalculationStrategy): void {
        if (!this.strategies.has(strategy)) {
            this.strategies.add(strategy);
        }
    }

    calulate(costCalculationParams: CostCalculationDto): Money {
        return Array.from(this.strategies).reduce((currentCost: Money, strategy: CostCalculationStrategy) => {
            const newCost = strategy.calulate(costCalculationParams);
            return (newCost.isSmallerThan(currentCost)) ? newCost : currentCost;
        }, new Money());
    }
}