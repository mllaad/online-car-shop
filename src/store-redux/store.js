import { configureStore } from '@reduxjs/toolkit'

import  dataReducer  from '../features-redux/data/data'
import cartReducer from '../features-redux/cart/cart'


const store = configureStore({
  reducer: {
    data: dataReducer,
    cart: cartReducer,
  }
})

export default store
