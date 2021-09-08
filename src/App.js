import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/navbar/NavBar';
import ItemListContainer from './Components/ItemListContainer';


function App() {
  return (
    <>  
      <NavBar />

      <ItemListContainer saludo='Bienvenidos !!' />
    
    </>
  );
}

export default App;
