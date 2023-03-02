import axios from "axios";

const URL = "https://tudestinoapp-api-production.up.railway.app/api/auth/login";

const fetchLogin = async (data) => {
  try {
    const result = await axios.post(URL, data);
    return result.data;
  } catch (error) {
    return error.response.status;
  }
};

export default fetchLogin;
