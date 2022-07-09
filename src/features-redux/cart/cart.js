import { createSlice } from '@reduxjs/toolkit'

const addToCart = (productsItems, productToAdd) => {
    const exisitItem = productsItems.find(product=> product.CarModel === productToAdd.CarModel)
    
    if(exisitItem) {
        return productsItems.map((product)=>{
            return product.CarModel === productToAdd.CarModel ?
            {...product, quantity: product.quantity + 1} :
            product
        })
    }
    return [...productsItems, {...productToAdd, quantity:1}]
}
const removeToCart = (cartItems, productToRemove) => {
    const existItem = cartItems.find((item)=> item.CarModel === productToRemove.CarModel)
    if(existItem.quantity === 1) {
        return cartItems.filter((item)=> item.CarModel !== productToRemove.CarModel)
    }
    return cartItems.map((item)=> {
        return item.CarModel === productToRemove.CarModel ?
        {...item, quantity: item.quantity - 1} :
        item
    })    
}
const clearToCart = (cartItems, productToClear) => {
    return cartItems.filter((item)=> item.CarModel !== productToClear.CarModel)
}
const initialState = {
    isCartOpen: false,
    cartItems: [],
    cartCount: 0,
    cartTotalCount: 0,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        toggle: (state) => {
            state.isCartOpen = !state.isCartOpen
        },
        addcart: (state, {payload}) => {
            state.cartItems = addToCart(state.cartItems, payload)
        },
        removecart: (state, {payload}) => {
            state.cartItems = removeToCart(state.cartItems, payload)
        },
        clearcart: (state, {payload}) => {
            state.cartItems = clearToCart(state.cartItems, payload)
        }

    }
})

export default cartSlice.reducer
export const {toggle, addcart, removecart, clearcart} = cartSlice.actions

