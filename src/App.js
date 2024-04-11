import { useState, useEffect } from "react";
import { AllRoutes } from "./Routes/AllRoutes";
import { Header, Footer } from './components'

function App() {
  // const isLocalStorageExist = localStorage.getItem('cinemate-cart');
  // const [cart, setCart] = useState(isLocalStorageExist ? JSON.parse(isLocalStorageExist) : []);

  // useEffect(() => {
  //   localStorage.setItem('cinemate-cart', JSON.stringify(cart))
  // }, [cart])

  return (
    <div className="App dark:bg-gray-700">
      <Header />
      <AllRoutes />
      {/* <AllRoutes cart={cart} setCart={setCart} /> */}
      <Footer />
    </div>
  );
}

export default App;
