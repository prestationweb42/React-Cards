import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "../Styles/Navbar.css";

function Naviagation() {
    return (
        <>
            <Navbar className="nav-bar" expand="xl">
                <Container>
                    <Navbar.Brand as={Link} to="/" className="nav-brand">
                        Arbre à chat
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <NavLink
                                as={Link}
                                to="/guideachat"
                                className="nav-link"
                            >
                                Guide d'achat
                            </NavLink>
                            <NavLink
                                as={Link}
                                to="/promo"
                                className="nav-link"
                            >
                                Promo
                            </NavLink>
                            <NavLink
                                as={Link}
                                to="/connaissezvous"
                                className="nav-link"
                            >
                                Connaissez-vous?
                            </NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default Naviagation;
