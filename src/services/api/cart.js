import axios from "axios";

const API_URL = "https://fakestoreapi.com/carts";

export const addToCart = async (items) => {
  try {
    const response = await axios.post(API_URL, items);
    return response;
  } catch (error) {
    console.error(error);
  }
};
