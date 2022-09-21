
import './App.css';
import  Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';;

function App() {
  return (
    <div className="App">
      <header className="App-header mt-5">
        <Navbar />
      </header>
      <body className='mt-5 body'>
       <ItemListContainer saludo={"¡Bienvenidos a la Tienda Online de Las Magnolias!"}/>

      </body>
    </div>
  );
}

export default App;
