import axios from "axios";

const API_URL = "https://fakestoreapi.com/products";

export const fetchAllProduct = async () => {
  try {
    const response = await axios.get(`${API_URL}`);
    return response; // Return the response object
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

export const fetchProductById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response;
  } catch (error) {
    console.error("Error fetching product by id:", error);
    throw error;
  }
};


