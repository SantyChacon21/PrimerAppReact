import ItemDetailsContainer from './components/itemDetailsContainer/ItemDetailsContainer';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import { NavBar } from './components/navBar/NavBar';
import { BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>

      <NavBar/>

        <Routes>

          <Route path='/cart' element={<h4>aca se muestra el carrito</h4>}/>
          <Route path='/' element={<ItemListContainer/>} />
          <Route path='/category/:categoryNumber' element={<ItemListContainer/>}/>
          <Route path='/item/:id' element={<ItemDetailsContainer/>}/>

        </Routes>

    </BrowserRouter>
  );
}

export default App;
