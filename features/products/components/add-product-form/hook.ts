import { FormEvent, useState } from "react";
import { mockApiCall } from "@/utils";

export function useAddProductForm(onClose: () => void,productId: unknown) {
  const [submitting, setSubmitting] = useState(false);
  //
  async function onSubmit(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    const formData = new FormData(ev.currentTarget);
    const response = await fetch("/api/submit", {
      method: "POST",
      body: formData,
    });

    // Handle response if necessary
    const data = await response.json();
    // ...
  }
  async function handleSubmit() {
    if (!submitting) {
      setSubmitting(true);
      // TODO(etugbeh): integrate api
      const response = await fetch(`/api/products/${productId}`, {
        method: "DELETE",
      });
      const data = await response.json();
      console.log("🚀 ~ handleSubmit ~ data:", data);
      setSubmitting(false);
      onClose();
    }
  }

  return { submitting, handleSubmit };
}
