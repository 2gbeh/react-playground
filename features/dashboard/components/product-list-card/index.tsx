import React from "react";
import { fakePeople } from "@/data/fake-people";

interface IProps {
  product: (typeof fakePeople)[0];
}

const ProductListCard: React.FC<IProps> = ({ product }) => {
  console.log("🚀 ~ ProductListCard");
  // renders
  return (
    <li key={product.email} className="flex justify-between gap-x-6 py-5">
      <div className="flex min-w-0 gap-x-4">
        <img
          alt=""
          src={product.imageUrl}
          className="size-12 flex-none rounded-full bg-gray-50"
        />
        <div className="min-w-0 flex-auto">
          <p className="text-sm/6 font-semibold text-gray-900">
            {product.name}
          </p>
          <p className="mt-1 truncate text-xs/5 text-gray-500">
            {product.email}
          </p>
        </div>
      </div>
      <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
        <p className="text-sm/6 text-gray-900">{product.role}</p>
        {product.lastSeen ? (
          <p className="mt-1 text-xs/5 text-gray-500">
            Last seen{" "}
            <time dateTime={product.lastSeenDateTime}>{product.lastSeen}</time>
          </p>
        ) : (
          <div className="mt-1 flex items-center gap-x-1.5">
            <div className="flex-none rounded-full bg-emerald-500/20 p-1">
              <div className="size-1.5 rounded-full bg-emerald-500" />
            </div>
            <p className="text-xs/5 text-gray-500">Online</p>
          </div>
        )}
      </div>
    </li>
  );
};

export default React.memo(ProductListCard);
