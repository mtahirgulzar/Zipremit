import React from "react"
import { useTranslation } from "gatsby-plugin-react-i18next"

const AgentContactForm = () => {
  const { t } = useTranslation()

  return (
    <>
      <h2 className="text-9">
        {t("Contact Us")}
      </h2>

      <form>
        <div className="form-group">
          <label htmlFor="name">{t("Name")}</label>
          <input id="name" className="form-control" type="name" placeholder={t("Enter your full name")} />
        </div>
                  
        <div className="form-group">
          <label htmlFor="email">{t("Email")}</label>
          <input id="email" className="form-control" type="email" placeholder="email@example.com" />
        </div>
                                  
        <div className="form-group">
          <label htmlFor="tel">{t("Mobile Number")}</label>
          <input id="tel" className="form-control" type="tel" />
        </div>

        <div className="form-group">
          <label htmlFor="message">{t("Comment")}</label>
          <textarea id="message" className="form-control" height="100px"></textarea>
        </div>

        <div className="form-group">
          <input className="btn btn-secondary btn-block" type="submit" value="Send" />
        </div>
      </form>
    </>
  )
}

export default AgentContactForm
