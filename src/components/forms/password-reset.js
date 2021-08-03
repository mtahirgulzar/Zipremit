import React from "react"
import { Link, useTranslation } from "gatsby-plugin-react-i18next"

const PasswordResetForm = () => {
  const { t } = useTranslation()

  return (
    <form method="POST" action="https://zipcoinremit.com/password/email">
      <div className="form-group">
        <input type="email" name="email" className="form-control" placeholder={t("Your Email Address")} required />
      </div>

      <button type="submit" className="text-uppercase btn btn-secondary">
        {t("Send Password Reset Link")}
      </button>

      <p className="text-3 text-center text-muted mt-4">
        {t("Already have an account?") + " "}

        <Link to="/login" className="btn-link text-3">
          {t("Log In")}
        </Link>
      </p>
    </form>
  )
}

export default PasswordResetForm
