import { FormEvent, useState } from "react";
//
import { mockApiCall } from "@/utils";
import { useAppDispatch, useAppSelector } from "@/store/store.config";
import { productsActions } from "@/store/products/products.slice";
import { ROUTE } from "@/constants/ROUTE";

export function useAddProductForm(onClose: () => void) {
  const productsSelector = useAppSelector((state) => state.products);
  const dispatch = useAppDispatch();
  const [submitting, setSubmitting] = useState(false);
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
  async function handleSubmit() {
    if (!submitting) {
      setSubmitting(true);
      // mutation
      const response = await fetch(
        `${ROUTE.products}/${productsSelector.productId}`,
        {
          method: "DELETE",
        }
      );
      const data = await response.json();
      // query
      const response2 = await fetch(ROUTE.products);
      const data2 = await response2.json();
      dispatch(productsActions.setProducts(data2));
      //
      setSubmitting(false);
      onClose();
    }
  }

  return { submitting, handleSubmit, productsSelector };
}
