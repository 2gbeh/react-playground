import { ProductEntity } from "../utils/products.interface";

export class ProductsPipe {
  static transform = (product: ProductEntity) => {
    const p = product;
    return {
      raw: product,
      thumbnail: p?.thumbnail || "/avatar-flat.png",
    };
  };
}
