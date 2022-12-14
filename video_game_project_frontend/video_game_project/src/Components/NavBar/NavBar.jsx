import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchBar from "../SearchBar/SearchBar";

const NavBar = ({ setQuery, useRef }) => {
  return (
    <Navbar bg="primary" expand="lg" fixed="top">
      <Container fluid>
        <Navbar.Brand href="#">GameData.TF</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Nav className="me-auto my-2 my-lg-0">
          <Nav.Link href="">Home</Nav.Link>
        </Nav>
        <Container>
          <SearchBar setQuery={setQuery} useRef={useRef} />
        </Container>
      </Container>
    </Navbar>
  );
};

export default NavBar;
