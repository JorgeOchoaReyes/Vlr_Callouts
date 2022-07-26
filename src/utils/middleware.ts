/* eslint-disable require-jsdoc */
import type { NextApiRequest, NextApiResponse } from "next";

const runMiddleware = (
  req: NextApiRequest,
  res: NextApiResponse,
  fn: Function
) => {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result);
      }
  
      return resolve(result);
    });
  });
};

export default runMiddleware; 