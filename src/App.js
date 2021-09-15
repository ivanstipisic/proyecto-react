import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/navbar/NavBar';
import ItemListContainer from './Components/ItemListContainer';


function App() {
  return (
    <>  
      <div className="body">
      <NavBar />

      <ItemListContainer className='saludo' saludo='The Book Store.. seleccione su producto 👇🏻' />
      </div>

      
    </>
  );
}

export default App;
