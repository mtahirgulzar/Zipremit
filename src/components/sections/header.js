import React from "react"
import PropTypes from "prop-types"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import NavDropdown from "react-bootstrap/NavDropdown"
import { Link, Trans, useI18next } from "gatsby-plugin-react-i18next"

import links from "navigation/header"
import { LOGIN, REGISTER } from "utilities/urls"

import logo from "images/logos/logo.png";

const Header = ({ className }) => {
  const { changeLanguage, t } = useI18next();
  const crntLang = (useI18next().language);
  return (
    <header className={className}>
      <div className={crntLang === "fr" ? "container-fluid" : "container"}>
        <Navbar expand="lg">
          <Link to="/">
            <Navbar.Brand>
              <img src={logo} alt="ZipRemit" width="130" />
            </Navbar.Brand>
          </Link>

          <Navbar.Toggle aria-controls="navbar">
            <span></span>
            <span></span>
            <span></span>
          </Navbar.Toggle>

          <Navbar.Collapse id="navbar" className="row">
            <div className="col-sm-10 text-center">
              <Nav as="ul" className="d-inline-flex" onSelect={(eventKey) => changeLanguage(eventKey)}>
                {links.map((item, index) => (
                  <li key={index}>
                    <Link to={item.link} className="nav-link">
                      <Trans>{item.title}</Trans>
                    </Link>
                  </li>
                ))}

                <li>
                  <NavDropdown id="language" title={t("Language")}>
                    <NavDropdown.Item eventKey="en">
                      <Trans>English</Trans>
                    </NavDropdown.Item>

                    <NavDropdown.Item eventKey="fr">
                      <Trans>French</Trans>
                    </NavDropdown.Item>
                  </NavDropdown>
                </li>

                <li className="d-lg-none">
                  <a href={LOGIN} className="nav-link">
                    <Trans>Login</Trans>
                  </a>
                </li>

                <li className="d-lg-none">
                  <a href={REGISTER} className="nav-link">
                    <Trans>Sign Up</Trans>
                  </a>
                </li>
              </Nav>
            </div>
            {/* <span style={{ flex: "1 1 auto" }}></span> */}

            <Nav className="auth-links col-sm-2">
              <a href={LOGIN} className="login">
                <Trans>Login</Trans>
              </a>

              <a href={REGISTER} className="btn btn-secondary register">
                <Trans>Sign Up</Trans>
              </a>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </header>
  )
}

Header.defaultProps = {
  className: "primary"
}

Header.propTypes = {
  className: PropTypes.string
}

export default Header
