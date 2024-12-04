import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  docs: string;
};

export default function helloHandler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  res
    .status(200)
    .json({ docs: "https://nextjs.org/docs/api-routes/introduction" });
}
