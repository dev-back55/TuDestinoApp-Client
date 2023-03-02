import axios from "axios";

const URL = "https://tudestinoapp-api-production.up.railway.app/api/products";

const getProduct = async (productId) => {
  try {
    const result = await axios.get(`${URL}/${productId}`);
    return result;
  } catch (error) {
    return error.response.status;
  }
};

export default getProduct;
