import React from "react"
import { useTranslation } from "gatsby-plugin-react-i18next"
import { Link } from "gatsby-plugin-react-i18next"

import Header from "components/sections/header"
import Footer from "components/sections/footer"
import Download from "components/sections/download"
//import Section from "components/layouts/section"

import logo from "images/logos/logo-light.png"

import "utilities/fontawesome"

const RegularLayout = ({ children }) => (
  <>
    <Header />

    {children}

    <Download />

    <Footer />
  </>
)

const AuthenticationLayout = ({ children }) => <>{children}</>

const SecondaryLayout = ({ title, children }) => {
  const { t } = useTranslation()

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-12 col-lg-9 mx-auto">
          {/* <a href="https://www.zipcoinremit.com"></a> */}
          <Link to="/" className="nav-link">
            <img
              src={logo}
              alt="Logo"
              className="mb-4"
              style={{ maxWidth: "180px" }}
            />
          </Link>
          <h4 className="font-weight-400">{t(title)}</h4>

          <section className="section secondary">{children}</section>
        </div>
      </div>
    </div>
  )
}

export default ({ children, pageContext }) => {
  if (pageContext.layout === "authentication") {
    return <AuthenticationLayout>{children}</AuthenticationLayout>
  } else if (pageContext.layout === "alternate") {
    return (
      <SecondaryLayout title={pageContext.title}>{children}</SecondaryLayout>
    )
  }

  return <RegularLayout>{children}</RegularLayout>
}
