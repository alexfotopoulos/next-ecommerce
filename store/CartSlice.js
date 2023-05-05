import { createSlice } from "@reduxjs/toolkit";
import { addToCart, incrementCartItem, decrementCartItem, removeCartItem } from "./CartSliceReducers";

// what items would like like
// items: [
//     { 
//         title: "Red, Blue & Orange Jordans",
//         price: 199.95,
//         size: {
//             10: {
//                 qty: 2
//             },
//             12: {
//                 qty: 1
//             }
//         }
//      },
// ]


//intial state for cart slice
const initialState = {
    items: [],
    totalQuantity: 0,
    subtotal: 0
};

//create cart slice
const CartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart,
        incrementCartItem,
        decrementCartItem,
        removeCartItem
    }
});

export const cartActions = CartSlice.actions;

export default CartSlice.reducer;