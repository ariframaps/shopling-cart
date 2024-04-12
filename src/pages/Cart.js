import { CartItem } from "../components"
import { useCart } from "../context/CartContext"

export const Cart = () => {

    const { cart, total } = useCart()

    return (
        <main>
            <div className="my-10">
                <p className="text-xl font-medium text-gray-900 truncate dark:text-white text-center">Total: ${total}</p>
                <ul className="max-w-4xl divide-y divide-gray-200 dark:divide-gray-500 m-auto">
                    {cart ? cart.map(item => (
                        <CartItem key={item.id} item={item} />
                    )) : ''}
                </ul>

            </div>
        </main>
    )
}
