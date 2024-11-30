import { useState } from "react";

export function useDashboard() {
  const [selectedId, setSelectedId] = useState(-1);
  const [openFormDialog, setOpenFormDialog] = useState(false);
  //
  const toggleFormDialog = () => setOpenFormDialog((prev) => !prev);
  const closeFormDialog = () => {
    setSelectedId(-1);
    setOpenFormDialog(false);
  };
  const onDelete = (id: number) => {
    setSelectedId(id);
    setOpenFormDialog(true);
  };

  return {
    openFormDialog,
    toggleFormDialog,
    closeFormDialog,
    onDelete,
    selectedId,
  };
}
