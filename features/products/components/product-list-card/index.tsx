import React from "react";
import { QrCodeIcon } from "@heroicons/react/24/outline";
//
import { DateHelper } from "@/utils/helpers/date.helper";
import { formatBarcode } from "@/utils";
import { ProductEntity, ProductsPipe } from "@/features/products";

interface IProps {
  product: ProductEntity;
}

const ProductListCard: React.FC<IProps> = ({ product }) => {
  const item = ProductsPipe.transform(product);
  console.log("🚀 ~ ProductListCard");
  // renders
  return (
    <li className="flex justify-between gap-x-6 py-5">
      <div className="flex min-w-0 gap-x-4">
        <img
          src={product?.thumbnail || ""}
          alt=""
          className="size-12 flex-none rounded-full bg-gray-50"
        />
        <div className="min-w-0 flex-auto">
          <p className="text-sm/6 font-semibold text-gray-900">
            {product.name}
          </p>
          <p className="mt-1 truncate text-xs/5 text-gray-500">
            {product.summary}
          </p>
        </div>
      </div>
      <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
        <p className="text-sm/6 text-gray-900 flex items-center">
          <QrCodeIcon
            aria-hidden="true"
            className="block size-4 group-data-[open]:hidden mr-2 text-indigo-600"
          />
          {formatBarcode(product.barcode)}
        </p>
        <p className="mt-1 text-xs/5 text-gray-500">
          <time dateTime={product?.updated_at || product.created_at}>
            {DateHelper.asSunJan11970(
              product?.updated_at || product.created_at
            )}
          </time>
        </p>
      </div>
    </li>
  );
};

export default React.memo(ProductListCard);
