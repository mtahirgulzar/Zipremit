import React from "react"
import { useTranslation } from "gatsby-plugin-react-i18next"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const HelpSearchForm = () => {
  const { t } = useTranslation()

  return (
    <form>
      <div className="input-group">
        <input className="form-control border-0" type="search" placeholder={`${t("Search for answer")}...`}/>

        <div className="input-group-append">
          <span className="input-group-text bg-white border-0 p-0">
            <button className="btn text-muted px-4 border-0 shadow-none">
              <FontAwesomeIcon icon="search" />
            </button>
          </span>
        </div>
      </div>
    </form>
  )
}

export default HelpSearchForm
