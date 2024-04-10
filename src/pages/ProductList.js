import { ProductCard } from "../components/ProductCard"
import { useFetch } from "../hooks/useFetch"

export const ProductList = ({ apiPath, cart, setCart }) => {
    const { data: products } = useFetch(apiPath)

    return (
        <main>
            <div className="flex justify-center items-center my-20">
                <div className="max-w-screen-xl grid grid-cols-3 gap-10">
                    {products ? products.map(product => (
                        <ProductCard product={product} key={product.id} cart={cart} setCart={setCart} />
                    )) : ''}
                </div>
            </div>
        </main>
    )
}
