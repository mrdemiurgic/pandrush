import { VercelRequest, VercelResponse } from '@vercel/node';

import sendEmail from '../src/utils/backEmail';

const email = async (request: VercelRequest, response: VercelResponse) => {
  if (
    request.body === undefined ||
    request.body.email === undefined ||
    request.body.name === undefined ||
    request.body.message === undefined
  ) {
    return response
      .status(400)
      .send('Bad request. One of the fields is missing: email, name, message');
  }

  const { email, name, message } = request.body;

  console.log(email);
  const result = await sendEmail(name, email, message);
  response.status(200).send(result);
};

export default email;
