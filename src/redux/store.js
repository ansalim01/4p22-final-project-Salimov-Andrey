import { configureStore } from '@reduxjs/toolkit'
import cart from './slices/cartSlice';

export default configureStore({
    reducer: {
        cart,
    }
})