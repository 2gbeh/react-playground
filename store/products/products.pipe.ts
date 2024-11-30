import { formatBarcode } from "@/utils";
import { DateHelper } from "@/utils/helpers/date.helper";
import { ProductEntity } from "@/store/products/products.interface";

export class ProductsPipe {
  static transform = (product: ProductEntity) => {
    const p = product;
    return {
      ...p,
      raw: p,
      thumbnail: p?.thumbnail || "/images/avatar-flat.png",
      hasSummary: !!p.summary,
      barcode: formatBarcode(p.barcode),
      ariaDate: (p?.updated_at || p.created_at) as string,
      displayDate: DateHelper.asSunJan11970(p?.updated_at || p.created_at),
    };
  };
}
