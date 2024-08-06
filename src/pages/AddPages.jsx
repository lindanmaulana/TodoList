import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import AddFormik from "../components/Add/AddFormik";
import { NavLink } from "react-router-dom";
import NavbarComponent from "../components/Navbar/NavbarComponent";

const AddPages = () => {
  return (
    <>
      <NavbarComponent />
      <Container style={{ paddingBottom: "20px" }}>
        <AddFormik />
      </Container>
    </>
  );
};

export default AddPages;
