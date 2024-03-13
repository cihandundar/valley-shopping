import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: `cart`,
  initialState,
  cartItem: [],
  reducers: {
    addToCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
      } else {
        const tempProduct = {
          ...action.payload,
          cartQuantity: 1,
        };
        state.cartItems.push(tempProduct);
        toast.success(`${action.payload.title} added`);
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    remove(state, action) {
      const nextCartItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== action?.payload?.id
      );
      state.cartItems = nextCartItems;
      toast.error(`${action.payload.title} deleted`);
    },
    decreaseCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      );
      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;
      } else if (state.cartItems[itemIndex].cartQuantity === 1) {
        const nextCartItems = state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        );
        toast.error(`${action.payload.title} deleted`);
        state.cartItems = nextCartItems;
      }
    },
    clearCart(state, action) {
      state.cartItems = [];
      toast.error(`Cart cleared`);
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    getTotals(state, action) {
      let { total, quantiy } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const itemTotal = price * cartQuantity;

          cartTotal.total += itemTotal;
          cartTotal.quantiy += cartQuantity;

          return cartTotal;
        },
        {
          total: 0,
          quantiy: 0,
        }
      );

      state.cartTotalQuantity = quantiy;
      state.cartTotalAmount = total;
    },
  },
});

export const { addToCart, remove, decreaseCart, clearCart, getTotals } =
  cartSlice.actions;

export default cartSlice.reducer;
