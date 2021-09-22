import CartWidget from './CartWidget';
import './NavBar.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';


const NavBar = () => {
 
    return (
    
    <>
    <div className="navegador">
    <Navbar bg="dark" variant="dark">
    <Container>
      <Link exact to='/'>
    <Navbar.Brand href="#home">The Book Store 📚 </Navbar.Brand>
    </Link>
    <Nav className="me-auto">
      <Link exact to='/categoria/literatura-fantastica'>
      <Nav.Link href="#rowling">J.K ROWLING</Nav.Link>
      </Link>
      <Nav.Link href="#martin">G.R.R MARTIN</Nav.Link>
      <Nav.Link href="#tolkien">J.R.R TOLKIEN </Nav.Link>
    <Link exact to='/cart'>
    <CartWidget/>
    </Link>
    </Nav>
    </Container>
    
  
  </Navbar>
  </div>
    
    
    
    </>

    )


}

export default NavBar;