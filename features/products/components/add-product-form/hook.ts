import { FormEvent, useState } from "react";
//
import { mockApiCall } from "@/utils";
import { useAppDispatch, useAppSelector } from "@/store/store.config";
import { productsActions } from "@/store/products/products.slice";
import { ROUTE } from "@/constants/ROUTE";

export function useAddProductForm(onClose: () => void) {
  const dispatch = useAppDispatch();
  const productsSelector = useAppSelector((state) => state.products);
  const [deleting, setDeleting] = useState(false);
  //
  async function onSubmit(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    const formData = new FormData(ev.currentTarget);
    const response = await fetch("/api/submit", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
  }
  async function handleDelete() {
    if (!deleting) {
      setDeleting(true);
      // mutation
      await fetch(`${ROUTE.products}/${productsSelector.productId}`, {
        method: "PATCH",
        body: JSON.stringify({ _action: "trash" }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      // query
      const response2 = await fetch(ROUTE.products);
      const data2 = await response2.json();
      dispatch(productsActions.setProducts(JSON.parse(data2.data)));
      //
      setDeleting(false);
      onClose();
    }
  }

  return { productsSelector, deleting, handleDelete };
}
