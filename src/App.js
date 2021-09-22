import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/navbar/NavBar';
import ItemListContainer from './Components/ItemListContainer';
import ItemDetailContainer from './Components/Details/ItemDetailContainer';
import Cart from './Components/Cart/Cart';



function App() {
  return (
<BrowserRouter>

      <div className="body">
      <NavBar />
      
      <Switch>
      {/* OPCION 1 DE ENRUTADO */}
      <Route path='/' exact>
      <ItemListContainer className='saludo' saludo='The Book Store.. seleccione su producto 👇🏻' />
      </Route>

      {/* OPCION 2 ENRUTADO */}
          <Route exact path='/categoria/:idCategoria' component={ItemListContainer} />
          <Route exact path='/detalle/id' component ={ItemDetailContainer} />
          <Route exact path='/cart' component ={Cart} />

      </Switch>
      </div>

</BrowserRouter>
  );
}

export default App;
