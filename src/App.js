import { useEffect, useState } from "react";
import { AllRoutes } from "./Routes/AllRoutes";
import { Header, Footer } from './components'

function App() {
  const [cart, setCart] = useState([])

  useEffect(() => {
    console.log(cart)
  }, [cart])

  return (
    <div className="App dark:bg-gray-700">
      <Header />
      <AllRoutes cart={cart} setCart={setCart} />
      <Footer />
    </div>
  );
}

export default App;
