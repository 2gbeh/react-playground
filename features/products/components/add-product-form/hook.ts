import { FormEvent, useState } from "react";
import { mockApiCall } from "@/utils";
import { useRouter } from "next/router";
import { ROUTE } from "@/constants/ROUTE";

export function useAddProductForm(onClose: () => void,productId: unknown) {
      const router = useRouter()
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
      // TODO(etugbeh): integrate api
      const response = await fetch(`${ROUTE.products}/${productId}`, {
        method: "DELETE",
      });
      const data = await response.json();
      // console.log("🚀 ~ handleSubmit ~ data:", data);
      setSubmitting(false);
      // await fetch(ROUTE.products)
      onClose();
      router.reload()
    }
  }

  return { submitting, handleSubmit };
}
