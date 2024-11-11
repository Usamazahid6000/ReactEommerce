import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addToCart } from "../services/api/cart";

const initialState = {
  items: [],
  loading: false,
  error: null,
  vale: 0,
};

// Step 2: Create an async thunk for fetching products
export const addToCartAsync = createAsyncThunk(
  "product/addToCart",
  async (items) => {
    const response = await addToCart(items); // This will now return the response object
    // Combine the returned ID with the items you sent
    return { id: response.data.id, items };
  }
);

// Create the product slice
const addToCartSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addToCartAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addToCartAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload);
      })
      .addCase(addToCartAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message; // Store the error message
      });
  },
});

export const selectItems = (state) => state?.cart?.items;
export default addToCartSlice.reducer;
