import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    totalPrice: 0,
    items: [],
  },
  reducers: {
    // addItem(state, action) {
    //   state.items.push(action.payload)
    //   state.totalPrice = state.items.reduce((sum, obj) => {
    //     console.log(obj.pricet);
    //     console.log(sum);
    //     return (obj.price * 1000 + sum * 1000) / 1000;
    //   }, 0)

    // },
    addItem(state, action) {

      const findItem = state.items.find(obj => obj.id === action.payload.id);
      if (findItem) {

        findItem.count++
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        })
      }
      state.totalPrice = state.items.reduce((sum, obj) => {

        return (+(+(obj.price * obj.count.toFixed(2)) + sum).toFixed(2));
      }, 0)

    },
    removeItem(state, action) {
      state.items.map((obj) => {
        if (obj.id === action.payload) {
          return state.totalPrice = (state.totalPrice - (obj.price * obj.count).toFixed(2)).toFixed(2)
        }

        // if (obj.id === action.payload) {
        //   return obj.price * obj.count;
        // }
      })

      console.log(action.payload);



      state.items = state.items.filter(obj => obj.id !== action.payload);

    },
    clearItem(state,) {
      state.items = [];
      state.totalPrice = 0;

    },

    minusItem(state, action) {
      const findItem = state.items.find(obj => obj.id === action.payload);
      if (findItem) {
        findItem.count--
        state.totalPrice = (state.totalPrice - findItem.price).toFixed(2)

      }
      if (findItem.count === 0) {
        state.items = state.items.filter(obj => obj.id !== action.payload);
      }
    },
  }
})


export const { addItem, removeItem, minusItem, clearItem } = cartSlice.actions

export default cartSlice.reducer