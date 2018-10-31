const initialState = {
    product : {}
};
export default function cart(state = initialState, action) {
    switch (action.type) {
        case CART_ADD:
            return Object.assign({},state,{
                product : action.productId
            });
        case CART_REMOVE:
            return Object.assign({},state,{
                product : action.productId
            });;
        default:
            return state;
    }
}