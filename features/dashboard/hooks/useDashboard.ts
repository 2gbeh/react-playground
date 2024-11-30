import { useState } from "react";

export function useDashboard() {
  const [openFormDialog, setOpenFormDialog] = useState(false);
  //
  const toggleFormDialog = () => setOpenFormDialog((prev) => !prev);

  return { openFormDialog, setOpenFormDialog, toggleFormDialog };
}
