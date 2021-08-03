import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link, useTranslation } from "gatsby-plugin-react-i18next"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import Select from "components/utilities/select"

const RegisterForm = () => {
  const { t } = useTranslation()

  const data = useStaticQuery(graphql`
    query RegisterFormQuery {
      allCountriesJson {
        edges {
          node {
            code
            name
          }
        }
      }
    }
  `)

  return (
    <form method="POST" action="https://zipcoinremit.com/register">
      <div className="form-group">
        <input name="name" type="text" className="form-control" placeholder={t("Enter Full Name") + " * " + t("with no special characters")} required />
      </div>

      <div className="form-group">
        <input type="text" className="form-control" name="date_of_birth" placeholder={t("Birth Date") + " * (MM/DD/YYY)," + t("Must be 18yrs old")} data-provide="datepicker" required />
      </div>

      <div className="form-group">
        <input type="text" name="email" className="form-control" placeholder={t("Your Email Address") + " *"} required />
      </div>

      <div className="form-group">
        <input type="password" name="password" className="form-control" placeholder={t("Create a Password") + " *"} />
      </div>

      <div className="form-group">
        <input type="text" name="referral_code" className="form-control" placeholder={t("Referral Code")} />
      </div>

      <div className="form-group">
        <label>{t("Country")} (<span className="text-danger">*</span>)</label>

        <Select name="address_data[country]" title="Select" search={true} required>
          {data.allCountriesJson.edges.map(({ node }, index) => (
            <option key={index} value={node.code}>
              {node.name}
            </option>
          ))}
        </Select>
      </div>

      <div className="form-row m-0">
        <div className="form-check">
          <input id="terms" type="checkbox" className="form-check-input" name="accept_terms" required />
          <label htmlFor="terms" className="form-check-label">{t("I Accept")}</label>
        </div>&nbsp;

        <a href="https://zipcoinremit.com/docs/ZipCoinRemit_TermsofUse_Conditions.pdf" target="_blank" rel="noreferrer" className="btn-link text-3">
          {t("Terms and Conditions")}
        </a>&nbsp;&amp;&nbsp;

        <a href="https://zipcoinremit.com/docs/ZipCoinRemit_PrivacyPolicy.pdf" target="_blank" rel="noreferrer" className="btn-link text-3">
          {t("Privacy and Policy")}
        </a>
      </div>

      <button type="submit" className="btn btn-secondary btn-block my-3 text-uppercase">
        {t("Sign Up")}
      </button>

      <p className="text-3 text-center text-muted">
        {t("Already have an account?") + " "}

        <Link to="/login" className="btn-link text-3">
          {t("Sign In")}
        </Link>
      </p>

      <p className="text-3 text-center text-muted">
        {t("Or Login through")}
      </p>

      <ul className="social-icons social-icons-md social-icons-colored">
        <li className="google">
          <a href="https://zipcoinremit.com/login/google">
            <FontAwesomeIcon icon={["fab", "google"]} />
          </a>
        </li>

        <li className="facebook-f">
          <a href="https://zipcoinremit.com/login/facebook">
            <FontAwesomeIcon icon={["fab", "facebook-f"]} />
          </a>
        </li>

        <li className="twitter">
          <a href="https://zipcoinremit.com/login/twitter">
            <FontAwesomeIcon icon={["fab", "twitter"]} />
          </a>
        </li>
      </ul>
    </form>
  )
}

export default RegisterForm
