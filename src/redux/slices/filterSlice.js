import { createSlice } from '@reduxjs/toolkit'

export const filterSlice = createSlice({
    name: 'cart',
    initialState: {
        categoryId: 0,
        sort: [],
    },
    reducers: {
        addItem(state, action) {
            state.item.push(action.payload)
        },
        removeItem(state, action) {
            state.item.filter(obj => obj.id !== action.payload)
        }
    }
})


export const { increment, decrement, incrementByAmount } = filterSlice.actions

export default filterSlice.reducer