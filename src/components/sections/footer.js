import React, { useState } from "react"
import PropTypes from "prop-types"
import Modal from "react-bootstrap/Modal"
import { Link, Trans, useI18next } from "gatsby-plugin-react-i18next"

import SubscribeForm from "components/forms/subscribe"
import SurveyForm from "components/forms/survey"

import {
  information,
  services,
  help,
  legal,
  social,
  legalFrench,
} from "navigation/footer"

const Nav = ({ heading, items, ...props }) => (
  <div className="col-sm-6 col-md mb-3 mb-md-0">
    <h4 className="text-3 text-muted text-uppercase font-weight-400 mb-3">
      <Trans>{heading}</Trans>
    </h4>

    <ul className="nav flex-column">
      {items.map((item, index) => (
        <li className="nav-item" key={index}>
          {props.external || item.external ? (
            <a
              className="nav-link"
              href={item.link}
              target="_blank"
              rel="noreferrer"
            >
              <Trans>{item.title}</Trans>
            </a>
          ) : (
            <Link to={item.link} className="nav-link">
              <Trans>{item.title}</Trans>
            </Link>
          )}
        </li>
      ))}

      {props.children}
    </ul>
  </div>
)

Nav.defaultProps = {
  external: false,
}

Nav.propTypes = {
  heading: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  external: PropTypes.bool,
}

const Footer = ({ className }) => {
  // const { t } = useI18next();

  var crntLang = useI18next().language

  const [show, setShow] = useState(false)

  return (
    <footer className={className}>
      <div className="container">
        <div className="row">
          <Nav heading="Information" items={information} />

          <Nav heading="Services" items={services} />

          <Nav heading="Help Center" items={help}>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={() => setShow(true)}>
                <Trans>Survey</Trans>
              </a>

              <Modal show={show} backdrop="static" size="lg" centered>
                <Modal.Body>
                  <SurveyForm />
                </Modal.Body>

                <Modal.Footer>
                  <button className="btn" onClick={() => setShow(false)}>
                    Cancel Survey
                  </button>
                </Modal.Footer>
              </Modal>
            </li>
          </Nav>

          <Nav
            heading="Legal"
            items={crntLang === "en" ? legal : legalFrench}
            external
          />

          <Nav heading="Keep in Touch" items={social} external />

          <div className="col-12 col-lg-3">
            <div className="row">
              <div className="col-sm-12">
                <SubscribeForm />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="copyright pt-4 mt-4">
        <div className="container">
          <div className="row">
            <div className="col">
              <p className="text-center text-lg-left mb-2 mb-lg-0">
                <Trans>
                  ZipCoin Remit Ltd. is registered as a Money Service Business
                  (MSB) with the Financial Transactions and Reports Analysis
                  Centre of Canada (FINTRAC) under Registration Number{" "}
                  <span className="text-primary">M18463842</span> and is
                  licensed in Alberta with License Number{" "}
                  <span className="text-primary">202137219</span>
                </Trans>
              </p>
            </div>
          </div>

          <br />

          <div className="row">
            <div className="col">
              <p className="text-center text-lg-left mb-2 mb-lg-0">
                <Trans>Copyright</Trans> &copy; {new Date().getFullYear()}{" "}
                <Link to="/">ZipRemit</Link>.{" "}
                <Trans>All Rights Reserved.</Trans>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

Footer.defaultProps = {
  className: "primary",
}

Footer.propTypes = {
  className: PropTypes.string,
}

export default Footer
