export const ProductCard = ({ product }) => {
    const imgStyle = (url) => {
        const style = {
            width: '384px',
            height: '270px',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            background: `url('${url}')`
        }
        return style;
    }

    // {`width: 286px; height:270px; background-size: cover; background-position: center; background: url('${product.thumbnail}')`}
    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="rounded-lg" style={imgStyle(product.thumbnail)}>
                {/* <img className="rounded-t-lg" src={product.thumbnail} alt="" style="width: 286px; height:270px; background-size: cover; background-position: center;" /> */}
            </div>
            <div className="p-5 flex flex-col justify-between min-h-60">
                <div>
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{product.title}</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{product.description}</p>
                </div>
                <div>
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${product.price}</h5>
                    </a>
                    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Add to cart
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    )
}
