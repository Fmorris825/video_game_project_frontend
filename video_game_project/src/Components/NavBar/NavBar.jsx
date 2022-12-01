import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchBar from "../SearchBar/SearchBar";

const NavBar = ({ setQuery, setAllGames }) => {
  return (
    <Navbar bg="primary" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">GameData.TF</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Nav className="me-auto my-2 my-lg-0">
          <Nav.Link href="#action1">Home</Nav.Link>
        </Nav>
        <Container>
          <SearchBar setQuery={setQuery} setAllGames={setAllGames} />
        </Container>
      </Container>
    </Navbar>
  );
};

export default NavBar;
