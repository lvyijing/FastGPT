import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { deviceId, token } = req.query;
  try {
    const result = await axios.get(
      `${process.env.NEXT_PUBLIC_ELITECH_API_URL}/api/device/Device/decrementTimes`,
      {
        params: {
          deviceId
        },
        headers: {
          Authorization: token
        }
      }
    );
    res.status(200).json(result.data); // 必须调用res.json()
  } catch (error) {
    console.error('Error fetching data from Elitech API:', error); // 打印错误信息
    res.status(500).json({ error: error }); // 错误时也需返回响应
  }
}
