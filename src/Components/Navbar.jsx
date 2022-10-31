import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "../Styles/Navbar.css";

function Naviagation() {
    return (
        <>
            {/* <Navbar bg="primary" variant="dark"> */}
            <Navbar className="nav-bar">
                <Container>
                    <Navbar.Brand as={Link} to="/" className="nav-brand">
                        Arbre à chat
                    </Navbar.Brand>
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/" className="nav-link fs-4">
                            Home
                        </Nav.Link>
                        <Nav.Link
                            as={Link}
                            to="/promo"
                            className="nav-link fs-4"
                        >
                            Promo
                        </Nav.Link>
                        <Nav.Link
                            as={Link}
                            to="/connaissezvous"
                            className="nav-link fs-4"
                        >
                            Connaissez-vous?
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default Naviagation;
