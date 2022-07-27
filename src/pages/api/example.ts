import type { NextApiRequest, NextApiResponse } from "next";
import cors from "cors";
import middleware from "../../utils/middleware";
interface User {
    id: number,
    name: string
}

const Cors = cors({
  methods: ["GET", "HEAD"],
});

// Dummy Data
const users: User[] = [
  { name: "Jacky", id: 1 }, 
  { name: "Rob", id: 2 }, 
  { name: "Emma", id: 3 }
];


// To view this go to http://localhost:3000/api/example
// eslint-disable-next-line require-jsdoc
const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
  await middleware(_req, res, Cors); 
  return res.status(200).json(users);
};

export default handler; 