import axios from "axios";
const URL =
  "https://tudestinoapp-api-production.up.railway.app/api/auth/register";

const fetchRegister = async (data) => {
  try {
    const result = await axios.post(URL, data);
    return result;
  } catch (error) {
    return error.response.status;
  }
};

export default fetchRegister;
