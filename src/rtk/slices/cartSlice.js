import { createSlice } from "@reduxjs/toolkit";
const CartSlice = createSlice({
  initialState: {
    cartItems: JSON.parse(localStorage.getItem("cartItems")) || [],
  },
  name: "cartSlice",
  reducers: {
    AddToCart(state, action) {
      const item = state.cartItems.find((product) => {
        if (product.size) {
          return (
            product.size === action.payload.size &&
            +product.id === +action.payload.id
          );
        } else {
          return +product.id === +action.payload.id;
        }
      });
      if (item) {
        item.qty = parseInt(item.qty) + 1;
      } else {
        state.cartItems.push(action.payload);
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    removeFromCart(state, action) {
      let item = state.cartItems.filter((i) => {
        if (i.size) {
          return i.size !== action.payload.size || +i.id !== +action.payload.id;
        } else {
          return +i.id !== +action.payload.id;
        }
      });
      state.cartItems = item;
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    updateQty(state, action) {
      const item = state.cartItems.find((product) => {
        if (product.size) {
          return (
            product.size === action.payload.size &&
            +product.id === +action.payload.id
          );
        } else {
          return +product.id === +action.payload.id;
        }
      });
      console.log(action.payload);
      let id = `${item.id}${item.size}`;
      item.qty = document.getElementById(`${id}`).value;
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
  },
});
export const { AddToCart, removeFromCart, updateQty } = CartSlice.actions;
export default CartSlice.reducer;
