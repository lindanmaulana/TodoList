import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import HomeTable from "../components/Home/HomeTable";
import NavbarComponent from "../components/Navbar/NavbarComponent";

const HomePages = () => {
  return (
    <>
      <NavbarComponent />
      <Container>
        <HomeTable />
      </Container>
    </>
  );
};

export default HomePages;
