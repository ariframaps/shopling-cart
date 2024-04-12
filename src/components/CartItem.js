import { useCart } from "../context/CartContext"

export const CartItem = ({ item }) => {
    const { removeFromCart } = useCart()

    function handleRemove() {
        removeFromCart(item)
    }

    return (
        <li className="mb-3">
            <div className="flex items-center space-x-6 rtl:space-x-reverse p-5">
                <div className="flex-shrink-0">
                    <img className="w-16 h-16 rounded-lg" src={item.thumbnail} alt='makanan' />
                </div>
                <div className="flex-1 min-w-0">
                    <p className="text-xl font-medium text-gray-900 truncate dark:text-white">
                        {item.title}
                    </p>
                    <p className="text-2xl font-semibold text-blue-600 truncate dark:text-blue-200">
                        ${item.price}
                    </p>
                </div>
                <div onClick={handleRemove} className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    <button className='inline-flex items-center px-3 py-2 text-md font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none bg-red-700 hover:bg-red-800 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800'>
                        <p>Remove</p>
                    </button>
                </div>
            </div>
        </li>
    )
}
