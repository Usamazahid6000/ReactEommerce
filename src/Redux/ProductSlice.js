import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchAllProduct,
  fetchProductById,
} from "../services/api/product";

const initialState = {
  product: [],
  loading: false,
  error: null,
  selectedProduct: null,
};

// Step 2: Create an async thunk for fetching products
export const fetchAllProductsAsync = createAsyncThunk(
  "product/fetchAllProduct",
  async () => {
    const response = await fetchAllProduct(); // This will now return the response object
    return response.data; // Return the data from the response
  }
);

export const fetchProductByIdAsync = createAsyncThunk(
  "product/fetchProductById",
  async (id) => {
    const response = await fetchProductById(id); // This will now return the response object
    return response.data; // Return the data from the response
  }
);



// Create the product slice
const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProductsAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllProductsAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.product = action.payload; // Store the product data in the state
      })
      .addCase(fetchAllProductsAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message; // Store the error message
      })
      .addCase(fetchProductByIdAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProductByIdAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedProduct = action.payload;
      })
      .addCase(fetchProductByIdAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message; // Store the error message
      });
  },
});

export const selectAllProducts = (state) => state?.product?.product;
export const selectProductsById = (state) => state?.product?.selectedProduct;

export default productSlice.reducer;
