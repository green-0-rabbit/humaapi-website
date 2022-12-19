import { NextApiRequest, NextApiResponse } from 'next';
import { URLSearchParams } from 'url';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const token = req.body;

  const searchParams = new URLSearchParams({
    secret: process.env.GOOGLE_CAPTCHA_SECRET ?? '',
    response: token
  });

  try {
    const data = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?${searchParams}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
    const resBody = await data.json();

    return res.status(200).json(resBody);
  } catch (error) {
    return res.status(500).json({ error });
  }
};
