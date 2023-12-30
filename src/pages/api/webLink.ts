import axios, { AxiosError } from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function webLink(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { token } = req.body;
    try {
      const result = await axios.post('http://api.friending.online/webLink', {
        token,
      });
      res.send(result.data);
    } catch (err: any) {
      res.send(err);
    }
  }
}
