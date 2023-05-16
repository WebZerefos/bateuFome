import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './src/slices/CartSlice'
import restaurantSlice from './src/slices/restaurantSlice'

export const store = configureStore({
	reducer: {
		cart: cartSlice,
		restaurant: restaurantSlice,
	},
})
