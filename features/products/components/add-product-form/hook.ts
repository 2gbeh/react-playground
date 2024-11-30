import React, { useState } from "react";
import { mockApiCall } from "@/utils";

export function useAddProductForm(onClose: () => void) {
  const [submitting, setSubmitting] = useState(false);
  //
  async function handleSubmit() {
    if (!submitting) {
      setSubmitting(true);
      // TODO(etugbeh): integrate api
      await mockApiCall();
      setSubmitting(false);
      onClose();
    }
  }

  return { submitting, handleSubmit };
}
