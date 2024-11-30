import type { NextApiRequest, NextApiResponse } from "next";
import { ProductsService } from "@/store/products/products.service";

export default async function productHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;
  const { _action } = req.body;
  console.log("🚀 ~ _action, id:", _action, id);
  let response: string;
  //
  switch (req.method) {
    case "PATCH":
      response =
        _action === "restore"
          ? await ProductsService.restore(Number(id))
          : _action === "trash"
          ? await ProductsService.trash(Number(id))
          : "";
      res.status(200).json({ data: response });
      break;
    default:
      res.status(405).json({ error: "METHOD_NOT_ALLOWED" });
  }
}
