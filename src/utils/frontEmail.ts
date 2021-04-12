import axios from 'axios';

const sendEmail = async (name: String, email: string, message: string) => {
  const result = await axios.post('/api/email', { name, email, message });
  return result;
};

export default sendEmail;
