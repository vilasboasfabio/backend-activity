export class ClothingList{
    constructor() {
        this.clothing = [];
    }
    addClothing(clothing) {
        this.clothing.push(clothing);
    }
    getClothingById(id) {
        return this.clothing.find((clothing) => clothing.id === id);
    }
    getClothing() {
        return this.clothing;
    }
    deleteClothing(id) {
        this.clothing = this.clothing.filter((clothing) => clothing.id !== id);
    }
    updateClothing(id, name, type, size, color, image, quantity) {
        this.clothing = this.clothing.map((clothing) => {
            if (clothing.id === id) {
               clothing.name = name;
                clothing.type = type;
                clothing.size = size;
                clothing.color = color;
                clothing.image = image;
                clothing.quantity = quantity;


            }
            return clothing;
        });
        return this.getClothingById(id);
    }
    
}