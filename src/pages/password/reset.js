import React from "react"
import { Link, Trans } from "gatsby-plugin-react-i18next"

import SEO from "components/utilities/seo"
import Background from "components/layouts/background"
import PasswordResetForm from "components/forms/password-reset"

import logo from "images/logos/logo-light.png"
import main from "images/backgrounds/main.jpg"

const ResetPage = () => {
  return (
    <>
      <SEO title="Reset Password" />

      <div className="container-fluid px-0">
        <div className="row no-gutters" style={{height: "100vh"}}>
          <div className="col-md-6">
            <Background image={main} className="d-flex align-items-center h-100" bg="primary" opacity="8" scroll>
              <div className="row no-gutters">
                <div className="col-10 col-lg-9 mx-auto">
                  <div className="my-5 mb-md-0">
                    <Link to="/" className="d-flex" title="ZipRemit">
                      <img src={logo} width="180" alt="ZipRemit" />
                    </Link>
                  </div>
                </div>
              </div>

              <div className="row no-gutters my-auto">
                <div className="col-10 col-lg-9 mx-auto">
                  <h1 className="text-11 mb-4">
                    <Trans>
                      Welcome Back!
                    </Trans>
                  </h1>

                  <p className="text-4 mb-5">
                    <Trans>
                      We are glad to see you again! Instant deposits, withdrawals & payouts trusted by millions worldwide.
                    </Trans>
                  </p>
                </div>
              </div>
            </Background>
          </div>

          <div className="col-md-6 d-flex align-items-center">
            <div className="container my-4">
              <div className="row">
                <div className="col-11 col-lg-9 col-xl-8 mx-auto">
                  <h3 className="font-weight-400 mb-4">
                    <Trans>Recover Your Password</Trans>
                  </h3>
                  
                  <PasswordResetForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ResetPage
