import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    totalQuantity: 0,
    subtotal: 0
};

const CartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action) {
            //determine if shoe already exists in state.items array
            let existingShoe = state.items.find(item => item.title === action.payload.title);
            //if shoe does exist
            if (existingShoe) {
                //check if size exists in existingShoe object
                if (existingShoe.size.hasOwnProperty(action.payload.size)) {
                    existingShoe.size[action.payload.size].qty = existingShoe.size[action.payload.size].qty + action.payload.quantity;
                } else {
                    //if size does not exist on existingShoe object
                    existingShoe.size[action.payload.size] = { qty: action.payload.quantity };
                };
            } else {
                //if shoe does not exist, create new shoe object
                let newItem = {
                    title: action.payload.title,
                    price: action.payload.price,
                    size: {
                        [action.payload.size]: {
                            qty: action.payload.quantity
                        }
                    }
                };
                //add new shoe object to state.items array
                state.items = [...state.items, newItem];
            };
            //add to new shoe quantity to totalQuantity 
            state.totalQuantity = state.totalQuantity + action.payload.quantity;
            //add shoe total to subtotal
            state.subtotal = state.subtotal + (action.payload.quantity * action.payload.price);
        }
    }
});

export const cartActions = CartSlice.actions;

export default CartSlice.reducer;