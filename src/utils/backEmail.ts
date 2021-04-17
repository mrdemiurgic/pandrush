import nodemailer from 'nodemailer';

interface Result {
  info: any;
  url: string | false;
}

const sendEmail = (
  name: string,
  email: string,
  message: string,
): Promise<Result> => {
  return new Promise((resolve, reject) => {
    const transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      auth: {
        user: 'milan11@ethereal.email',
        pass: 'w5qtBADnm5zeD4qwSa',
      },
    });

    // Message object
    const newMessage = {
      from: `${name} <${email}>`,
      to: 'Gabe <gabe@demiurgic.dev',
      subject: `${name} - Contact Form`,
      text: message,
      html: `<p>${message}</p>`,
    };

    transporter.sendMail(newMessage, (err, info) => {
      if (err) {
        return reject(err.message);
      }

      const result = { info, url: nodemailer.getTestMessageUrl(info) };
      return resolve(result);
    });
  });
};

export default sendEmail;
