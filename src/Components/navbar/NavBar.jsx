import CartWidget from './CartWidget';
import './NavBar.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';


const NavBar = () => {
 
    return (
    
    <>
    <div className="navegador">
    <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">The Book Store 📚 </Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#rowling">J.K ROWLING</Nav.Link>
      <Nav.Link href="#martin">G.R.R MARTIN</Nav.Link>
      <Nav.Link href="#tolkien">J.R.R TOLKIEN </Nav.Link>
    </Nav>
    </Container>
    
  
  </Navbar>
  </div>
    {/* <CartWidget /> */}
    
    
    
    </>

    )


}

export default NavBar;