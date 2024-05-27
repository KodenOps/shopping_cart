import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";


const initialState = {
    cartItems: cartItems,
    itemCount: 0,
    total: 0,
    isLoading: true,
}



 const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        clearCart: (state)=>{
            state.cartItems = []
        },
        removeItems:(state, action)=>{
            const itemId = action.payload;
            state.cartItems = state.cartItems.filter((e)=>e.id !== itemId)
        },
        increase: (state, {payload})=>{
            const cartItem = state.cartItems.find((e)=>e.id === payload.id);
            cartItem.amount = cartItem.amount+1
            console.log( cartItem.itemCount)
        },
        decrease: (state, {payload})=>{
            const cartItem = state.cartItems.find((e)=>e.id === payload.id);
            cartItem.amount = cartItem.amount-1
            console.log( cartItem.itemCount)
        },
        calculateTotal:(state)=>{
            let amount = 0;
            let total = 0;
            state.cartItems.forEach((eachItem)=>{
                amount += eachItem.amount;
                total += eachItem.amount * eachItem.price;
            });
            state.itemCount = amount;
            state.total = total;
        }
    }
})
export const {clearCart, removeItems, increase, decrease, calculateTotal}  = cartSlice.actions;
export default cartSlice.reducer;
// console.log(cartSlice)