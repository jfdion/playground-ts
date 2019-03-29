import { AliveCell } from "./alive-cell";
import { TemplateCell } from "./template-cell";

export class DeadCell extends TemplateCell implements Cell {

    die(): Cell {
        return this;
    }   
     live(): Cell {
        return new AliveCell(this.point);
    }


}