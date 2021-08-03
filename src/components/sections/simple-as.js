import React from "react"
import { Trans } from "gatsby-plugin-react-i18next"

import Section from "components/layouts/section"
import Feature from "components/layouts/feature"
import { REGISTER } from "utilities/urls"

const SimpleAs = () => {
  return (
    <Section className="bg-secondary">
      <h2 className="text-9 text-center text-light font-weight-400">
          <Trans>
            As Simple As 1-2-3
          </Trans>
        </h2>

        <p className="text-4 text-center font-weight-300 mb-5">
          <Trans>
            We make online transferes faster, simpler and easier than ever. Choose how and when you send, with great exchange rates and low fees
          </Trans>
        </p>

        <div className="row">
          <div className="col-sm-4 mb-4">
            <Feature text="1" boxStyle="1" color="secondary">
              <h3 className="mb-3">
                <Trans>
                  Sign Up Your Account
                </Trans>
              </h3>

              <p className="text-3 font-weight-300">
                <Trans>
                  Sign up for your free personal account in few minutes.
                </Trans>
              </p>
            </Feature>
          </div>

          <div className="col-sm-4 mb-4">
            <Feature text="2" boxStyle="1" color="secondary">
              <h3 className="mb-3">
                <Trans>
                  Send Money to Family
                </Trans>
              </h3>

              <p className="text-3 font-weight-300">
                <Trans>
                  Complete KYC, enter your beneficiary's email address then add your amount with currency to send securely.
                </Trans>
              </p>
            </Feature>
          </div>

          <div className="col-sm-4 mb-4">
            <Feature text="3" boxStyle="1" color="secondary">
              <h3 className="mb-3">
                <Trans>
                  Receive Money
                </Trans>
              </h3>

              <p className="text-3 font-weight-300">
                <Trans>
                  After sending money, the beneficiary will be notified via an email when money has been transferred to their account.
                </Trans>
              </p>
            </Feature>
          </div>
        </div>

        <div className="text-center mt-2">
          <a href={REGISTER} className="btn btn-secondary">
            <Trans>Open A Free Account</Trans>
          </a>
        </div>
    </Section>
  )
}

export default SimpleAs
