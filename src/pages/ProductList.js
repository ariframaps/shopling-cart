import { ProductCard } from "../components/ProductCard"
import { useFetch } from "../hooks/useFetch"
import { useCart } from "../context/CartContext";
import { useEffect } from "react";


export const ProductList = ({ apiPath }) => {
    const { data: products } = useFetch(apiPath)

    const { cart } = useCart()

    useEffect(() => {
        console.log(cart)
    }, [cart])

    return (
        <main>
            <div className="flex justify-center items-center my-20">
                <div className="max-w-screen-xl grid grid-cols-3 gap-10">
                    {products ? products.map(product => (
                        <ProductCard product={product} key={product.id} />
                        // <ProductCard product={product} key={product.id} cart={cart} setCart={setCart} />
                    )) : ''}
                </div>
            </div>
        </main>
    )
}
