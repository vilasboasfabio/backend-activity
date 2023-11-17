
import { v4 as uuidv4 } from 'uuid';

export class Clothing {
    constructor( name, type, size, color, image, quantity) {
        this.id = uuidv4();
        this.name = name;
        this.type = type;
        this.size = size;
        this.color = color;
        this.image = image;
        this.quantity = quantity;
    }
}