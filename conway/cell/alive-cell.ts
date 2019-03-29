import { TemplateCell } from "./template-cell";
import { DeadCell } from "./dead-cell";

export class AliveCell extends TemplateCell implements Cell {
    
    die(): Cell {
        return new DeadCell(this.point);
    }    

    live(): Cell {
        return this;
    }

    
}