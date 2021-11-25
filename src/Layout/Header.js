import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import { useHistory } from "react-router-dom";

function Header(props) {
  const history = useHistory();
  const params = history.location.pathname.split("/");

  console.log("history: ", history.location.pathname.split("/"));
  const [stateActive, setStateActive] = useState(params && params[1]);
  const handleActive = (active) => {
    setStateActive(active);
  };
  return (
    <div collapseOnSelect className="block-header">
      <div className="container">
        <div className="block-menu">
          <Navbar collapseOnSelect className="block-nav" expand="lg">
            <Container>
              <Navbar.Brand href="/">
                <img
                  width="165px"
                  src="/assets/images/home/logo_bankus.png"
                  alt="logo"
                />
              </Navbar.Brand>
              <Navbar.Toggle
                className="btn-toggle-custom"
                aria-controls="responsive-navbar-nav"
              />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav
                  className="me-auto block-list-menu"
                  navbarScroll
                  defaultActiveKey=""
                >
                  <NavLink to="/" onClick={() => handleActive("")}>
                    <Nav.Link href="home">
                      <span className={stateActive === "" ? "active" : ""}>
                        TRANG CHỦ
                      </span>
                    </Nav.Link>
                  </NavLink>
                  <NavLink
                    to="/introduce"
                    onClick={() => handleActive("introduce")}
                  >
                    <Nav.Link href="introduce">
                      <span
                        className={stateActive === "introduce" ? "active" : ""}
                      >
                        GIỚI THIỆU
                      </span>
                    </Nav.Link>
                  </NavLink>
                  <NavLink
                    to="/products"
                    onClick={() => handleActive("products")}
                  >
                    <Nav.Link href="products">
                      <span
                        className={stateActive === "products" ? "active" : ""}
                      >
                        SẢN PHẨM
                      </span>
                    </Nav.Link>
                  </NavLink>
                  <NavLink
                    to="/recruitment"
                    onClick={(e) => handleActive("recruitment")}
                  >
                    <Nav.Link href="recruitment">
                      <span
                        className={
                          stateActive === "recruitment" ? "active" : ""
                        }
                      >
                        TUYỂN DỤNG
                      </span>
                    </Nav.Link>
                  </NavLink>
                  <NavLink
                    to="/contact"
                    onClick={(e) => handleActive("contact")}
                  >
                    <Nav.Link href="contact">
                      <span
                        className={stateActive === "contact" ? "active" : ""}
                      >
                        LIÊN HỆ
                      </span>
                    </Nav.Link>
                  </NavLink>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      </div>
    </div>
  );
}

export default Header;
