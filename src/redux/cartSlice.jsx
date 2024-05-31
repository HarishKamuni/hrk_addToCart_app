import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  carts: [],
  quantity: 0,
};
const cartSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    AddCart: (state, action) => {
      const item = state.carts.findIndex(
        (item) => item.id === action.payload.id
      );
      if (item < 0) {
        const temp = { ...action.payload, quantity: 1 };
        state.carts.push(temp);
      } else {
        state.carts[item].quantity += 1;
      }
    },
  },
});

export const { AddCart } = cartSlice.actions;
export default cartSlice.reducer;
