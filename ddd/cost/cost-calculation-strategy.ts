import Money from "../money/money";
import CostCalculationDto from "./cost-calculation-dto";

export default interface CostCalculationStrategy {

    calulate(costCalculationParams: CostCalculationDto): Money;
}