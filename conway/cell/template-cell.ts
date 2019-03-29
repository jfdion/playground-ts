import { Point } from "../point/point";

export abstract class TemplateCell implements Cell {
    
    protected point: Point;

    constructor(point: Point) {
        this.point = point;
    }
    
    abstract die(): Cell;
    
    abstract live(): Cell;


}