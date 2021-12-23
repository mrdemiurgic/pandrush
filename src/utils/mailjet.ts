import { Buffer } from 'buffer';

import axios from 'axios';

const user =
  '84b76b2176fcbc1ece9e3497f6d36851:9c98ecfe4ccdf57746b36b9444aa1f31';
const email = 'pandrushllc@gmail.com';

const stringToBase64 = (text: string) => new Buffer(text).toString('base64');

const headers = {
  Authorization: `Basic ${stringToBase64(user || '')}`,
  'Content-Type': 'application/json',
};

const sendEmail = async (subject: string, body: string) => {
  console.log(`headers: ${JSON.stringify(headers)}`);

  const data = {
    Messages: [
      {
        From: {
          Email: email,
        },
        To: [
          {
            Email: email,
          },
        ],
        Subject: subject,
        HTMLPart: body,
        CustomID: 'ApplicationForm',
      },
    ],
  };

  try {
    const result = await axios.post('https://api.mailjet.com/v3.1/send', data, {
      headers,
    });

    return result.status;
  } catch (error) {
    return 502;
  }
};

export default sendEmail;
