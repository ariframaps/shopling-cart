import { ProductCard } from "../components/ProductCard"

export const ProductList = ({ apiPath }) => {
    return (
        <main>
            ProductsList: {apiPath}
            <div className="flex justify-center items-center">
                <div className="max-w-screen-xl grid grid-cols-3 gap-10 bg-red-200">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </div>
        </main>
    )
}
