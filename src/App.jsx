import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./views/Home";
import ProductDetails from "./views/ProductDetails";
import CartPage from "./views/Cart";
function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Header />
          {/* Page Content */}
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/ProductDetail/:id" element={<ProductDetails />} />
              <Route path="/cart" element={<CartPage />} />
            </Routes>
          </main>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
