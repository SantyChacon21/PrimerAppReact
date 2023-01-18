import ItemDetailsContainer from './components/itemDetailsContainer/ItemDetailsContainer';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import { NavBar } from './components/navBar/NavBar';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Form from './components/form/Form';
import CartContextProvider from './context/CartContext';
import Cart from './components/cart/Cart';

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <NavBar/>

          <Routes>

            <Route path='/cart' element={<Cart/>}/>
            <Route path='/' element={<ItemListContainer/>} />
            <Route path='/checkout' element={<Form/>} />
            <Route path='/category/:categoryNumber' element={<ItemListContainer/>}/>
            <Route path='/item/:id' element={<ItemDetailsContainer/>}/>

          </Routes>

      </CartContextProvider>

    </BrowserRouter>
  );
}

export default App;
