import { createContext, useContext } from "react"

const initialState = {
    cart: [],
    total: 0
}

const CartContext = createContext(initialState);

export const CartProvider = ({ children }) => {

    const value = {
        total: 10
    }

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext);