import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Data {
  username: string;
  email: string;
  count: number;
  image: any;
  products: number[];
  title: string;
  price: string;
}
interface AllData {
  items: Data[];
}

const initialState: AllData = {
  items: [],
};
const cartData = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItems: (state, action: PayloadAction<Data>) => {
      const newItem = action.payload;
      const isItemFounded = state.items.findIndex(
        (item) => item.products == newItem.products
      );

      if (isItemFounded !== -1) {
        state.items[isItemFounded].count = newItem.count
      } else {
        state.items.push(newItem);
      }
    },
    deleteFDBSlice: (state, action: PayloadAction<Data>) => {
      const newItem = action.payload;
      const isItemFounded = state.items.findIndex(
        (item) => item.products == newItem.products
      );

      isItemFounded != -1 && state.items.splice(isItemFounded, 1);
    },
  },
});

export const { addItems, deleteFDBSlice } = cartData.actions;
export default cartData.reducer;
