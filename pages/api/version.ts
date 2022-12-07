import type { NextApiRequest, NextApiResponse } from 'next';
import getConfig from 'next/config';

const {
  publicRuntimeConfig: { version },
} = getConfig();

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json(version);
}
