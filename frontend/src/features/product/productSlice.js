import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  item: [],
  details: {},
  isLoading: false,
  error: "",
};

export const fetchProduct = createAsyncThunk(
  "product/fetchProduct",
  async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    return response.data;
  }
);

export const fetchProductDetail = createAsyncThunk(
  "product/fetchProductDetail",
  async (id) => {
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
    return response.data;
  }
);

export const fetchProductsByCategory = createAsyncThunk(
  "product/fetchProductsByCategory",
  async (category) => {
    const response = await axios.get("https://fakestoreapi.com/products");
    const filteredProducts = response.data.filter(
      (product) => product.category === category
    );
    return filteredProducts;
  }
);

export const searchProducts = createAsyncThunk(
  "product/searchProducts",
  async (searchTerm) => {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products?search=${searchTerm}`
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProduct.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      state.item = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchProduct.rejected, (state, action) => {
      state.error = action.error.message;
      state.isLoading = false;
    });
    builder.addCase(fetchProductDetail.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchProductDetail.fulfilled, (state, action) => {
      state.details = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchProductDetail.rejected, (state, action) => {
      state.error = action.error.message;
      state.isLoading = false;
    });
    builder.addCase(fetchProductsByCategory.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchProductsByCategory.fulfilled, (state, action) => {
      state.isLoading = false;
      state.item = action.payload;
    });

    builder.addCase(fetchProductsByCategory.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
    builder.addCase(searchProducts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(searchProducts.fulfilled, (state, action) => {
      state.item = action.payload;
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(searchProducts.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export default productSlice.reducer;
