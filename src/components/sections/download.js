import React from "react"
import { Trans } from "gatsby-plugin-react-i18next"

import Section from "components/layouts/section"

import apple from "images/download/app-store.png"
import google from "images/download/play-store.png"
import mobile from "images/download/mobile-phone.png"

const Download = () => {
  return (
    <Section className="pt-5 pb-0">
      <div className="row">
        <div className="col-md-12 col-lg-9 col-xl-8 mx-auto">
          <div className="row">
            <div className="col-sm-5 col-md-5 order-1 order-sm-0 d-flex align-items-end">
              <img src={mobile} className="img-fluid" alt="Mobile App" />
            </div>

            <div className="col-sm-7 my-auto order-0 order-sm-1 text-center text-sm-left">
              <h2 className="text-8 font-weight-400 mb-3">
                <Trans>
                  Get The Zip App
                </Trans>
              </h2>

              <p className="text-4">
                <Trans>
                  Download your ZipRemit app for free for the fastest and most convenient way to send &amp; receive money
                </Trans>
              </p>

              <div className="d-sm-flex mb-4 mb-sm-0">
                <a className="mr-3" href="/" target="_blank" rel="noreferrer">
                  <img src={apple} className="img-fluid" alt="App Store" />
                </a>

                <a href="/" target="_blank" rel="noreferrer">
                  <img src={google} className="img-fluid" alt="Play Store" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default Download
