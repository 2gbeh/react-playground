import type { NextApiRequest, NextApiResponse } from "next";
import { ProductsService } from "@/store/products/products.service";

export default async function productsHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "GET":
      const response = await ProductsService.getAll();
      res.status(200).json({ data: response });
      break;
    default:
      res.status(405).json({ error: "METHOD_NOT_ALLOWED" });
  }
}
