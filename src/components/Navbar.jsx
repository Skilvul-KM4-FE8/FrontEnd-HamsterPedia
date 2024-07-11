import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink, Navigate, useNavigate } from "react-router-dom";
import Logo from "../assets/LogoHamsped.svg"
import "./../styles/Navbar.css";
import { Container, Button, Dropdown } from "react-bootstrap";
import DropdownNav from "./DropdownNav";

function MainNavbar() {
  const navigate = useNavigate();
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
            <NavLink to={"/"} target="_blank" className="nav-link">
              Beranda
            </NavLink>
            <NavLink to={"/jenishamster"} target="_blank" className="nav-link ">
              Jenis Hamster
            </NavLink>
            <DropdownNav id="dropdown-nav"></DropdownNav>
            <NavLink to={"/dnd"} target="_blank" className="nav-link ">
              Pantangan
            </NavLink>
            <NavLink to={"/faktailmiah"} target="_blank" className="nav-link ">
              Fakta Ilmiah
            </NavLink>
            <NavLink to={"/forum"} target="_blank" className="nav-link ">
              Forum
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

export default MainNavbar;
