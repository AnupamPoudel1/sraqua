import Home from "./components/Home";
import { Routes, Route } from 'react-router-dom';
import ProductsPage from "./components/ProductsPage";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<ProductsPage />} />
      </Routes>
      {/* <Route path="#about" element={<About />} />
      <Route path="#services" element={<Services />} />
      <Route path="#pets" element={<AquaticPets />} />
      <Route path="#shop" element={<Shop />} />
      <About />
      <Services />
      <AquaticPets />
      <Shop />
      <Contact />
      <Route path="#contact" element={<Contact />} /> */}
    </div>

  );
}

export default App;
