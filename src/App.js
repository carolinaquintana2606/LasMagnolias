
import './App.css';
import  Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'




function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <header className="App-header mt-5">
        <Navbar />
      </header>
      <body className='mt-5 body'>
        <Routes>
          <Route path='/' element={<ItemListContainer saludo={"¡Bienvenidos a la Tienda Online de Las Magnolias!"}/>}/>
          <Route path='/category/catId' element={<ItemListContainer />}/>
          <Route path='/detail/:prodId' element={<ItemDetailContainer/>}/>
       </Routes>
      </body>
      </BrowserRouter>
    </div>
  );
}

export default App;
