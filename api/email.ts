import { VercelRequest, VercelResponse } from '@vercel/node';

import mailjet from '../src/utils/mailjet';

const email = async (request: VercelRequest, response: VercelResponse) => {
  if (
    request.body === undefined ||
    request.body.subject === undefined ||
    request.body.body === undefined
  ) {
    return response
      .status(401)
      .send('401 Bad request. One of the fields is missing: subject, body');
  }

  const { subject, body } = request.body;

  const result = await mailjet(subject, body);

  return response.status(result).send(result);
};

export default email;
