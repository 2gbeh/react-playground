import type { NextApiRequest, NextApiResponse } from "next";
import { ProductsService } from "@/store/products/products.service";

export default async function productsHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { _action } = req.body;
  console.log("🚀 ~ _action:", _action)
  let response: string;
  //
  switch (req.method) {
    case "GET":
      response = await ProductsService.getAll();
      res.status(200).json({ data: response });
      break;
    case "PATCH":
      response =
        _action === "restore"
          ? await ProductsService.restore()
          : _action === "trash"
          ? await ProductsService.trash()
          : "";
      res.status(200).json({ data: response });
      break;
    default:
      res.status(405).json({ error: "METHOD_NOT_ALLOWED" });
  }
}
