import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/store/store.config";
import { ProductEntity, productsActions } from "@/store/products";

export function useDashboard(data: ProductEntity[]) {
  // const productsSelector = useAppSelector((state) => state.products);
  const dispatch = useAppDispatch();
  const [openFormDialog, setOpenFormDialog] = useState(false);
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

  useEffect(() => {
    dispatch(productsActions.setProducts(data));
  }, []);

  return {
    openFormDialog,
    toggleFormDialog,
    closeFormDialog,
    onDelete,
  };
}
