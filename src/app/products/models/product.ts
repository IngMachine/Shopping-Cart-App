export class Product {

    public description: string;
    public image: string;
    public name: string;
    public price: number;
    public sku: string;
    public idCart?: string;

    constructor( obj: DataObjProduct) {
        this.description = obj && obj.description;
        this.image = obj && obj.image;
        this.name = obj && obj.name;
        this.price = obj && obj.price;
        this.sku = obj && obj.sku;
        this.idCart = obj && obj.idCart;
    }

}

export interface DataObjProduct {
    description: string;
    image: string;
    name: string;
    price: number;
    sku: string;
    idCart?: string;
}
