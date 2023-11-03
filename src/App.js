import Home from "./components/Home";
import About from './components/About';
import Services from "./components/Services";
import AquaticPets from "./components/AquaticPets";
import Contact from "./components/Contact";
import ProductsPage from "./components/ProductsPage";

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Services />
      <AquaticPets />
      <ProductsPage />
      <Contact />
    </div>
  );
}

export default App;
