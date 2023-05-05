export function addToCart(state, action) {
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
    //add new shoe quantity to totalQuantity 
    state.totalQuantity = state.totalQuantity + action.payload.quantity;
    //add shoe total to subtotal
    state.subtotal = state.subtotal + (action.payload.quantity * action.payload.price);
};

export function incrementCartItem(state, action) {
    //find existing shoe in cart items to increment
    let existingShoe = state.items.find(item => item.title === action.payload.title);
    //increment qty by one
    existingShoe.size[action.payload.size].qty = existingShoe.size[action.payload.size].qty + 1;
    //increment totalQuantity by one
    state.totalQuantity = state.totalQuantity + 1;
    //add shoe price to subtotal
    state.subtotal = state.subtotal + (existingShoe.price);
};

export function decrementCartItem(state, action) {
    //find existing shoe in cart items to decrement
    let existingShoe = state.items.find(item => item.title === action.payload.title);
    //if amount is greater than one
    if (existingShoe.size[action.payload.size].qty > 1) {
        //decrement qty by one
        existingShoe.size[action.payload.size].qty = existingShoe.size[action.payload.size].qty - 1;
    } else {
        //create array from keys of existingShoe.size
        let keys = Object.keys(existingShoe.size);
        //if there is more than one size
        if (keys.length > 1) {
            //delete key value pair from size object
            delete existingShoe.size[action.payload.size];
        } else {
            //if there is only one size, delete existingShoe from state.items
            state.items = state.items.filter(item => item.title !== action.payload.title);
        };
    };
    //decrement totalQuantity by one
    state.totalQuantity = state.totalQuantity - 1;
    //add shoe price to subtotal
    state.subtotal = state.subtotal - (existingShoe.price);
};

export function removeCartItem(state, action) {
    //find existing shoe in cart items to decrement and note quantity to be removed and price
    let existingShoe = state.items.find(item => item.title === action.payload.title);
    //remove shoe quantity from totalQuantity
    state.totalQuantity = state.totalQuantity - existingShoe.size[action.payload.size].qty;
    //deduct shoe price to subtotal
    state.subtotal = state.subtotal - (existingShoe.size[action.payload.size].qty * existingShoe.price);
    //create array from keys of existingShoe.size
    let keys = Object.keys(existingShoe.size);
    //if there is more than one size
    if (keys.length > 1) {
        //delete key value pair from size object
        delete existingShoe.size[action.payload.size];
    } else {
        //if there is only one size, delete existingShoe from state.items
        state.items = state.items.filter(item => item.title !== action.payload.title);
    };
};