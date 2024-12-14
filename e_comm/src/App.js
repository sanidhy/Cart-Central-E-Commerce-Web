import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar/navbar';
import HomeScreen from './Component/Screen/homeScreen';
import Footer from './Component/Footer/footer';
import { Route, Routes } from 'react-router-dom';
import Products from './Component/Screen/Products/products';
import { Cart } from './Component/Screen/Products/Cart/cart';


function App() {
  return (
    <div className="App">
    <Navbar></Navbar>
    <Routes>
      <Route path='/' element={<HomeScreen></HomeScreen>}></Route>
      <Route path='/products' element={<Products></Products>}></Route>
      <Route path='/cart' element={<Cart></Cart>}></Route>
    </Routes>
    <Footer></Footer>  
    </div>
  );
}

export default App;
