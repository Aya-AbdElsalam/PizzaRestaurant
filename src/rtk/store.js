import { configureStore } from "@reduxjs/toolkit";
import FoodDataSlice from "../rtk/slices/products";
import cartSlice from "./slices/cartSlice";
export const store = configureStore({
  reducer: {
    FoodData: FoodDataSlice,
    Cart: cartSlice,
  },
});
