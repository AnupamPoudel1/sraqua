import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Services from './components/Services';
import Products from './components/Products';
// import ProductsPage from './components/ProductsPage';
import Contact from './components/Contact';

function App() {
  return (
    <div className='h-screen'>
      <Header />
      <Home />
      <Services />
      <Products />
      <Contact />
    </div>
  );
}

export default App;
