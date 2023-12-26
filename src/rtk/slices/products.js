import { createSlice } from "@reduxjs/toolkit";
import { foodData } from "../../data/FoodData";
import { bestSeller } from "../../data/FoodData";
function sort(filter) {
  if (sessionStorage.getItem("Typesort")) {
    if (sessionStorage.getItem("Typesort") === "high") {
      filter = filter.sort((a, b) => {
        return parseFloat(a.price) >= parseFloat(b.price) ? -1 : 1;
      });
    } else {
      filter = filter.sort((a, b) => {
        return parseFloat(a.price) <= parseFloat(b.price) ? -1 : 1;
      });
    }
  }
}
const FoodDataSlice = createSlice({
  initialState: {
    filterdProducts: foodData,
    filterdProductsBestSeller: bestSeller,
  },
  name: "FoodData",
  reducers: {
    filterProducts(state, action) {
      var filter = foodData.filter((product) => {
        if (action.payload.toLowerCase() === "all") {
          return product;
        } else {
          return (
            product.categories.toLowerCase() === action.payload.toLowerCase()
          );
        }
      });
      sort(filter);
      sessionStorage.removeItem("search");
      sessionStorage.removeItem("dataPrice");
      sessionStorage.removeItem("sort");
      state.filterdProducts = filter;
      sessionStorage.setItem("category", JSON.stringify(action.payload));
      sessionStorage.setItem("data", JSON.stringify(filter));
      if (document.querySelector(".filter > span")) {
        document.querySelector("input.search").value = "";
        document.querySelector(".filter > span").textContent = `From: 50EGP`;
      }
    },
    ////////////////////////////
    filterdProductsBestSeller(state, action) {
      var filter = bestSeller.filter((product) => {
        if (action.payload.toLowerCase() === "all") {
          return product;
        } else {
          return (
            product.categories.toLowerCase() === action.payload.toLowerCase()
          );
        }
      });
      state.filterdProductsBestSeller = filter;
    },
    //////////////////////////
    filterByPrice(state, action) {
      const data = JSON.parse(sessionStorage.getItem("data")) || foodData;
      var price = data.filter((product) => {
        return product.size
          ? parseFloat(product.size[0].price) >= parseFloat(action.payload)
          : parseFloat(product.price) >= parseFloat(action.payload);
      });
      sort(price);
      state.filterdProducts = price;
      document.querySelector("input.search").value = "";
      sessionStorage.removeItem("search");
      sessionStorage.setItem("dataPrice", JSON.stringify(price));
    },
    ////////////////////////
    searchProducts(state, action) {
      const data =
        JSON.parse(sessionStorage.getItem("dataPrice")) ||
        JSON.parse(sessionStorage.getItem("data")) ||
        foodData;
      var search = data.filter((product) => {
        return product.title
          .toLowerCase()
          .includes(action.payload.toLowerCase());
      });
      sort(search);
      state.filterdProducts = search;
      sessionStorage.setItem("search", JSON.stringify(search));
      if (document.querySelector("input.search").value === "") {
        sessionStorage.removeItem("search");
      }
    },
    //////////
    sortedFromHighToLow(state, action) {
      const data =
        JSON.parse(sessionStorage.getItem("search")) ||
        JSON.parse(sessionStorage.getItem("dataPrice")) ||
        JSON.parse(sessionStorage.getItem("data")) ||
        foodData;
      const sort = data.sort((a, b) => {
        return parseFloat(a.price) >= parseFloat(b.price) ? -1 : 1;
      });
      state.filterdProducts = sort;
      sessionStorage.setItem("sort", JSON.stringify(sort));
      sessionStorage.setItem("Typesort", "high");
    },
    ////////
    sortedFromLowToHigh(state, action) {
      const data =
        JSON.parse(sessionStorage.getItem("search")) ||
        JSON.parse(sessionStorage.getItem("dataPrice")) ||
        JSON.parse(sessionStorage.getItem("data")) ||
        foodData;
      const sort = data.sort((a, b) => {
        return parseFloat(a.price) <= parseFloat(b.price) ? -1 : 1;
      });
      state.filterdProducts = sort;
      sessionStorage.setItem("sort", JSON.stringify(sort));
      sessionStorage.setItem("Typesort", "low");
    },
  },
});
export const {
  filterProducts,
  filterdProductsBestSeller,
  searchProducts,
  filterByPrice,
  getAllProducts,
  sortedFromHighToLow,
  sortedFromLowToHigh,
} = FoodDataSlice.actions;
export default FoodDataSlice.reducer;
