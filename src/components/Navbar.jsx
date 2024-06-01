import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink, Navigate, useNavigate } from "react-router-dom";
import Logo from "../assets/LogoHamsped.svg"
import "./../styles/Navbar.css";
import { Container, Button, Dropdown } from "react-bootstrap";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";

function BasicExample() {

  const isLoggedIn = JSON.parse(localStorage.getItem("idUser")); // // true or false

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("idUser");
    window.location.reload();
  };

  let component = "";

  return (
    <Navbar bg="light" expand="lg">
      <Container className="mx-auto">
        <Navbar.Brand href="#">
          {" "}
          <div className="logoApp" onClick={() => navigate("/")}>
            <img src={Logo} alt="Logo Hamsped" />{" "}
          </div>{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto text-center">
            <NavLink to={"/"} className="nav-link">
              Beranda
            </NavLink>
            <NavLink to={"/jenishamster"} className="nav-link ">
              Jenis Hamster
            </NavLink>
            <NavLink to={"/perawatanhamster"} className="nav-link ">
              Perawatan Hamster
            </NavLink>
            <NavLink to={"/makananhamster"} className="nav-link ">
              Makanan Hamster
            </NavLink>
            <NavLink to={"/dnd"} className="nav-link ">
              Do's and Don'ts
            </NavLink>
          </Nav>
          <Nav className="ms-auto gap-1">
           {component}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
