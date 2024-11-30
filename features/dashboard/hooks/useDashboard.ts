import { useEffect, useState } from "react";
//
import { useAppDispatch, useAppSelector } from "@/store/store.config";
import { ProductEntity, productsActions } from "@/store/products";
import { ROUTE } from "@/constants/ROUTE";

export function useDashboard(data: ProductEntity[]) {
  const dispatch = useAppDispatch();
  const productsSelector = useAppSelector((state) => state.products);
  const [openFormDialog, setOpenFormDialog] = useState(false);
  const [resetting, setResetting] = useState(false);
  //
  const toggleFormDialog = () => setOpenFormDialog((prev) => !prev);
  const closeFormDialog = () => {
    dispatch(productsActions.setProductId(-1));
    setOpenFormDialog(false);
  };
  const onDelete = (id: number) => {
    dispatch(productsActions.setProductId(id));
    setOpenFormDialog(true);
  };
  //
  async function handleReset() {
    if (!resetting) {
      setResetting(true);
      // mutation
      await fetch(ROUTE.products, {
        method: "PATCH",
        body: JSON.stringify({ _action: "restore" }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      // query
      const response2 = await fetch(ROUTE.products);
      const data2 = await response2.json();
      dispatch(productsActions.setProducts(JSON.parse(data2.data)));
      //
      setResetting(false);
    }
  }

  useEffect(() => {
    dispatch(productsActions.setProducts(data));
  }, []);

  return {
    productsSelector,
    openFormDialog,
    toggleFormDialog,
    closeFormDialog,
    onDelete,
    handleReset,
    resetting,
  };
}
