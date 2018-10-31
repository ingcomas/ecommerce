const initialState = {
    product : {}
};

export default function cart(state = initialState, action) {
    switch (action.type) {
        case CART_ADD:
            return handleCartAdd(state, action.product);
        case CART_REMOVE:
            return handleCartRemove(state, action.product);
        default:
            return state;
    }
}