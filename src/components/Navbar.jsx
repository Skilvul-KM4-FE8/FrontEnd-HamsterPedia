import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink, Navigate, useNavigate } from "react-router-dom";
import CarevulLogo from "../assets/carevul-logo.svg";
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
            <img src={CarevulLogo} alt="Carevul Logo" />{" "}
          </div>{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto text-center">
            <NavLink to={"/"} className="nav-link">
              Beranda
            </NavLink>
            {/* <NavLink to={"/paymentdoctor"} className="nav-link ">
              Payment Test
            </NavLink> */}
            <NavLink to={"/consult/category"} className="nav-link ">
              Jenis Hamster
            </NavLink>
            <NavLink to={"/articlehome"} className="nav-link ">
              Perawatan Hamster
            </NavLink>
            <NavLink to={"/bmicalculator"} className="nav-link ">
              Panduan Pengiriman
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
