import {  Container, Nav, Navbar } from "react-bootstrap"
import { Link } from "react-router-dom"
import NavbarStyle from "../componentsStyle/NavbarStyle.css"
const NavbarCompo =()=>{
    return(
      <div>
        <Navbar className="navbar p-0 " variant="white">
          <Container className=" navbar-container flex-row d-inline-flex p-0 m-0">
            <div className="logo col">
              <img src="https://svgsilh.com/svg/1801287.svg" width={50} height={100} alt="Logo" />
            </div>

            <div className="menu col">
              <Nav className="navbar justify-content-between flex-row d-inline-flex g-2" id="navbar">
                <Link to={"/"} className="nav-item text-decoration-none m-2  text-black col">
                  <h5 className="nav-item">Home</h5>
                </Link>
                <Link to={"/cat"} className="nav-item text-decoration-none m-2 text-black  col">
                  <h5 className="nav-item">Cats</h5>
                </Link>
                <Link to={"/upload"} className="nav-item text-decoration-none m-2 text-black  col">
                  <h5 className="nav-item">Upload</h5>
                </Link>
              </Nav>
            </div>
           
          </Container>
          
        </Navbar>
      </div>
            )
}
export default NavbarCompo