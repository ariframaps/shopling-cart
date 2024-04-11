import { Routes, Route } from 'react-router-dom';
import { ProductList, Cart } from '../pages';

export const AllRoutes = () => {

    return (
        <Routes>
            <Route path='/' element={<ProductList apiPath='' />} />
            <Route path='category/smartphones' element={<ProductList apiPath='/category/smartphones' />} />
            <Route path='category/laptops' element={<ProductList apiPath='/category/laptops' />} />
            <Route path='category/fragrances' element={<ProductList apiPath='/category/fragrances' />} />
            <Route path='category/skincare' element={<ProductList apiPath='/category/skincare' />} />
            <Route path='category/groceries' element={<ProductList apiPath='/category/groceries' />} />
            <Route path='category/home-decoration' element={<ProductList apiPath='/category/home-decoration' />} />
            <Route path='cart' element={<Cart />} />
            {/* <Route path='/' element={<ProductList apiPath='' cart={cart} setCart={setCart} />} />
            <Route path='category/smartphones' element={<ProductList apiPath='/category/smartphones' cart={cart} setCart={setCart} />} />
            <Route path='category/laptops' element={<ProductList apiPath='/category/laptops' cart={cart} setCart={setCart} />} />
            <Route path='category/fragrances' element={<ProductList apiPath='/category/fragrances' cart={cart} setCart={setCart} />} />
            <Route path='category/skincare' element={<ProductList apiPath='/category/skincare' cart={cart} setCart={setCart} />} />
            <Route path='category/groceries' element={<ProductList apiPath='/category/groceries' cart={cart} setCart={setCart} />} />
            <Route path='category/home-decoration' element={<ProductList apiPath='/category/home-decoration' cart={cart} setCart={setCart} />} />
            <Route path='cart' element={<Cart cart={cart} setCart={setCart} />} /> */}
        </Routes>
    )
}
