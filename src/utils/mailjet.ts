import { Buffer } from 'buffer';

import axios from 'axios';
// @ts-ignore
import { MAILJET_USERSECRET } from '@env';

const stringToBase64 = (text: string) => new Buffer(text).toString('base64');

const headers = {
  Authorization: `Basic ${stringToBase64(MAILJET_USERSECRET || '')}`,
  'Content-Type': 'application/json',
};

const sendEmail = async (subject: string, body: string, to: string) => {
  const data = {
    Messages: [
      {
        From: {
          Email: 'contact@mobileaccess.us',
        },
        To: [
          {
            Email: to,
          },
        ],
        Subject: subject,
        HTMLPart: body,
        CustomID: 'ApplicationForm',
      },
    ],
  };

  const result = await axios.post('https://api.mailjet.com/v3.1/send', data, {
    headers,
  });

  return result.status;
};

export default sendEmail;
