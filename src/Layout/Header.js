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
                  <NavLink to="/">
                    <Nav.Link href="home">
                      <span
                        className={stateActive === "" ? "active" : ""}
                        onClick={() => handleActive("")}
                      >
                        TRANG CHỦ
                      </span>
                    </Nav.Link>
                  </NavLink>
                  <NavLink to="/products">
                    <Nav.Link href="products">
                      <span
                        className={stateActive === "products" ? "active" : ""}
                        onClick={() => handleActive("products")}
                      >
                        SẢN PHẨM
                      </span>
                    </Nav.Link>
                  </NavLink>
                  <NavLink to="/recruitment">
                    <Nav.Link href="recruitment">
                      <span
                        className={
                          stateActive === "recruitment" ? "active" : ""
                        }
                        onClick={(e) => handleActive("recruitment")}
                      >
                        TUYỂN DỤNG
                      </span>
                    </Nav.Link>
                  </NavLink>
                  <NavLink to="/contact">
                    <Nav.Link href="contact">
                      <span
                        className={stateActive === "contact" ? "active" : ""}
                        onClick={(e) => handleActive("contact")}
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
