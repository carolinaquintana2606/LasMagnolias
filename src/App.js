
import './App.css';
import  Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart'
import Checkout from './components/Checkout/Checkout';
import { CartContextProvider } from './context/CartContext'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {

  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
          <header className="App-header mt-5">
            <Navbar />
          </header>
          <body className='mt-5 body justify-content-center'>
            <Routes>
              <Route path='/' element={<ItemListContainer saludo={"¡Bienvenidos a la Tienda Online de Las Magnolias!"}/>}/>
              <Route path='/category/:catId' element={<ItemListContainer />}/>
              <Route path='/detail/:prodId' element={<ItemDetailContainer />}/>
              <Route path='/cart' element={<Cart/>} />
              <Route path='/checkout' element= {<Checkout/>} />
              <Route path='*' element={<h1>404 NOT FOUND</h1>} /> 
            </Routes>
          </body>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
