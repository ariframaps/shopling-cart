import { Routes, Route } from 'react-router-dom';
import { ProductList, Cart } from '../pages';

export const AllRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<ProductList />} />
            <Route path='smartphones' element={<ProductList apiPath='category/smartphones' />} />
            <Route path='laptops' element={<ProductList apiPath='category/laptops' />} />
            <Route path='fragrances' element={<ProductList apiPath='category/fragrances' />} />
            <Route path='skincare' element={<ProductList apiPath='category/skincare' />} />
            <Route path='groceries' element={<ProductList apiPath='category/groceries' />} />
            <Route path='home-decoration' element={<ProductList apiPath='category/home-decoration' />} />
            <Route path='cart' element={<Cart />} />
        </Routes>
    )
}
