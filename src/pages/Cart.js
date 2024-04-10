import { useEffect, useState } from "react"
import { CartItem } from "../components"

export const Cart = ({ cart, setCart }) => {
    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        let currentPrice = 0
        cart.forEach(product => {
            currentPrice += product.price
        });
        setTotalPrice(currentPrice);
    }, [cart])

    return (
        <main>
            <div className="my-10">
                <p className="text-xl font-medium text-gray-900 truncate dark:text-white text-center">Total: ${totalPrice}</p>
                <ul className="max-w-4xl divide-y divide-gray-200 dark:divide-gray-500 m-auto">
                    {cart ? cart.map(item => (
                        <CartItem key={item.id} item={item} cart={cart} setCart={setCart} />
                    )) : ''}
                </ul>

            </div>
        </main>
    )
}
