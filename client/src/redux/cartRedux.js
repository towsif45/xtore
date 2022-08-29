import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    combinedProducts: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
      state.combinedProducts = Object.values(
        state.products.reduce((obj, product) => {
          if (obj[product._id]) {
            obj[product._id].quantity += product.quantity;
          } else {
            obj[product._id] = {
              _id: product._id,
              img: product.img,
              title: product.title,
              price: product.price,
              quantity: product.quantity,
            };
          }
          return obj;
        }, {})
      );
    },
    resetCart: (state) => {
      state.products = [];
      state.combinedProducts = [];
      state.quantity = 0;
      state.total = 0;
    },
  },
});

export const { addProduct, resetCart } = cartSlice.actions;
export default cartSlice.reducer;
