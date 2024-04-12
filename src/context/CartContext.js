import { createContext, useContext, useReducer } from "react"
import { CartReducer } from "../reducer/CartReducer";

let initialState = {
    cart: [],
}

const localStorageCart = JSON.parse(localStorage.getItem('cinemate-cart'));
if (localStorageCart) initialState.cart = localStorageCart;

const CartContext = createContext(initialState);

export const CartProvider = ({ children }) => {

    const [state, dispatch] = useReducer(CartReducer, initialState)

    const addToCart = (product) => {
        const newCart = state.cart.concat(product)
        updateTotal(newCart)
        localStorage.setItem('cinemate-cart', JSON.stringify(newCart))

        dispatch({
            type: 'ADD_TO_CART',
            payload: {
                cart: newCart
            }
        })
    }

    const removeFromCart = (product) => {
        const newCart = state.cart.filter(item => item.id !== product.id)
        updateTotal(newCart)
        localStorage.setItem('cinemate-cart', JSON.stringify(newCart))

        dispatch({
            type: 'REMOVE_FROM_CART',
            payload: {
                cart: newCart
            }
        })
    }

    const updateTotal = (cart) => {
        let newTotal = 0
        cart.forEach(item => newTotal += item.price);

        dispatch({
            type: 'UPDATE_TOTAL',
            payload: {
                total: newTotal
            }
        })
    }

    const value = {
        cart: state.cart,
        total: state.total,
        addToCart,
        removeFromCart,
    }

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext);
