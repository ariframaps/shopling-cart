export const CartReducer = (state, action) => {
    const { type, payload } = action

    switch (type) {
        case 'ADD_TO_CART':
            return { ...state, cart: payload.cart }
        case 'REMOVE_FROM_CART':
            return { ...state, cart: payload.cart }
        case 'UPDATE_TOTAL':
            return { ...state, total: payload.total }
        default:
            break;
    }
}
