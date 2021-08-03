import React from "react"
import { Link, useTranslation } from "gatsby-plugin-react-i18next"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const LoginForm = () => {
  const { t } = useTranslation()

  return (
    <form method="POST" action="https://zipcoinremit.com/login">
      <div className="form-group">
        <label htmlFor="emailAddress">{t("Email Address")}</label>
        <input id="emailAddress" type="email" className="form-control" name="user_name" placeholder={t("Enter Your Email")} required />
      </div>

      <div className="form-group">
        <label htmlFor="loginPassword">{t("Password")}</label>
        <input id="loginPassword" type="password" className="form-control" name="password" placeholder={t("Enter Password")} required />
      </div>

      <div className="form-row mb-3">
        <div className="col">
          <div className="form-check">
            <input id="remember-me" type="checkbox" className="form-check-input" name="remember" />
            <label htmlFor="remember-me" className="form-check-label">{t("Remember Me")}</label>
          </div>
        </div>

        <div className="col d-flex justify-content-end">
          <Link to="/password/reset" className="btn-link">
            {t("Forgot Your Password?")}
          </Link>
        </div>
      </div>

      <button className="btn btn-sm-block btn-secondary px-5 text-uppercase" type="submit">
        {t("Sign In")}
      </button>

      <p className="text-3 text-center text-muted mt-5">
        {t("Don't have an account?") + " "}

        <Link className="text-3 text-uppercase btn-link" to="/register">
          {t("Sign Up")}
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

export default LoginForm
