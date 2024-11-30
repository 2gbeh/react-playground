import type { NextApiRequest, NextApiResponse } from "next";
import { ProductsService } from "@/store/products/products.service";

export default async function productHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;
  switch (req.method) {
    case "DELETE":
      const response = await ProductsService.trash(Number(id));
      res.status(200).json({ data: response });
      break;
    default:
      res.status(405).json({ error: "METHOD_NOT_ALLOWED" });
  }
}
