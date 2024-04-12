import { useState, useEffect } from "react";
import { AllRoutes } from "./Routes/AllRoutes";
import { Header, Footer } from './components'
import { useCart } from "./context/CartContext";

function App() {
  const isLocalStorageExist = localStorage.getItem('cinemate-cart');
  const { cart } = useCart()

  useEffect(() => {
    // localStorage.setItem('cinemate-cart', JSON.stringify(cart))
    console.log(cart)
  }, [cart])

  return (
    <div className="App dark:bg-gray-700">
      <Header />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
