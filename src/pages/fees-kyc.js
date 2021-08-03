import React from "react"
import { graphql } from "gatsby"
import { Link, Trans } from "gatsby-plugin-react-i18next"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import SEO from "components/utilities/seo"
import Background from "components/layouts/background"
import Youtube from "components/utilities/youtube"
import Section from "components/layouts/section"
import Feature from "components/layouts/feature"

import kyc from "images/backgrounds/fees.jpg"
import { REGISTER } from "utilities/urls"

const FeesKycPage = ({ data }) => {
  return (
    <>
      <SEO title="Fees/KYC" />

      <Background image={kyc} nomask scroll>
        <div className="row">
          <div className="col-12 text-center text-lg-left">
            <h1 className="text-11 mb-4">
              <Trans>We Promise Low Fees and No Extra Charges</Trans>
            </h1>

            <p className="text-5 line-height-4 mb-4">
              <Trans>
                Signing up to a ZipRemit account is FREE of charge. Create your account today and start!
              </Trans>
            </p>

            <a href={REGISTER} className="btn btn-secondary my-2 mr-2">
              <Trans>Open a Free Account</Trans>
            </a>

            <Youtube embed="asYXBrOc8Fo">See How It Works</Youtube>
          </div>
        </div>
      </Background>

      <Section className="pt-5 pb-0">
        <div className="row">
          {data.allFeesJson.edges.map(({ node }, index) => (
            <div className="col-md-6 col-xl-4 mb-5" key={index}>
              <div className="h-100 bg-white shadow-sm rounded p-5">
                <Feature icon={node.icon} boxStyle="4" color="light">
                  <h3 className="text-body text-7 mb-3">
                    <Trans>{node.heading}</Trans>
                  </h3>

                  <p className="text-4 line-height-4">
                    <Trans>{node.description}</Trans>
                  </p>

                  {node.extra && (
                    <div className="text-primary line-height-2 text-10 pt-3 pb-4 mb-2">
                      <Trans>{node.extra}</Trans>
                    </div>
                  )}
                </Feature>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-primary text-center">
        <h2 className="text-9">
          <Trans>Open a free account in minutes.</Trans>
        </h2>

        <p className="text-5 mb-4">
          <Trans>
            Quickly and easily send, receive and request money. Over 180 countries and 80 currencies supported.
          </Trans>
        </p>

        <a href={REGISTER} className="btn btn-light">
          <Trans>Open a Free Account</Trans>
        </a>
      </Section>

      <Section className="bg-white transfer-amounts">
        <h2 className="text-9 text-center mb-4">
          <Trans>Value added low price</Trans>
        </h2>

        <div className="row">
          {data.allPricesJson.edges.map(({ node }, index) => (
            <div className="col-sm-6 col-lg-4 mb-4" key={index}>
              <div className="h-100 bg-white rounded shadow p-4 text-center">
                <img src={node.flag.publicURL} alt=""/>

                <h4 className="my-3">
                  <Trans>Transfer Amounts</Trans>
                </h4>

                <div className="row">
                  <div className="col font-weight-bold text-left">
                    5.00 - 100.00
                  </div>

                  <div className="col text-right">
                    {node.currency.symbol + node.price1}
                  </div>
                </div>

                <hr />

                <div className="row">
                  <div className="col font-weight-bold text-left">
                    101 - 1,999
                  </div>

                  <div className="col text-right">
                    {node.currency.symbol + node.price2}
                  </div>
                </div>

                <hr />

                <div className="row">
                  <div className="col font-weight-bold text-left">
                    2000+
                  </div>

                  <div className="col text-right">
                    {node.price3}
                  </div>
                </div>

                <hr />

                <Link to={REGISTER} className="btn btn-secondary mt-2">
                  <Trans>Send Now</Trans>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="row">
          <div className="col-lg-8 col-md-10 m-auto">
            <div className="section-heading">
              <h2 className="section-title">
                <Trans>Know Your Customer (KYC) Plans</Trans>
              </h2>

              <p className="mb-0">
                <strong>
                  <Trans>Quick, Secure and Simple 1-2-3 step process</Trans>
                </strong>
              </p>

              <p>
                <Trans>
                  We’ve made our Identity verification process seamless and its super easy. Get started and try it today
                </Trans>
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12 m-auto">
            <div className="customer-plans">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th><Trans>Required Documents</Trans></th>
                    {/* <th><Trans>Basic KYC</Trans></th> */}
                    <th><Trans>Standard KYC</Trans></th>
                    <th><Trans>Advanced KYC</Trans></th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td><strong><Trans>Sending Amount</Trans></strong></td>
                    {/* <td><strong>$5 - $1,000</strong></td> */}
                    <td><strong>$5 - $2,999</strong></td>
                    <td><strong>$3,000+</strong></td>
                  </tr>

                  <tr>
                    <td><Trans>Update Profile</Trans></td>
                    {/* <td>
                      <FontAwesomeIcon icon="times-circle" /><br />
                      <sub><Trans>Validate Information Only</Trans></sub>
                    </td> */}
                    <td><FontAwesomeIcon icon="check-circle" /></td>
                    <td><FontAwesomeIcon icon="check-circle" /></td>
                  </tr>

                  <tr>
                    <td><Trans>ID Document Disclouser</Trans>
                      <ul className="list-unstyled">
                        <li><Trans>State Id</Trans></li>
                        <li><Trans>Driver License</Trans></li>
                        <li><Trans>Passport</Trans></li>
                      </ul>
                    </td>
                    {/* <td>--</td> */}
                    <td>
                      <FontAwesomeIcon icon="check-circle" />
                    </td>
                    <td>
                      <FontAwesomeIcon icon="check-circle" />
                    </td>
                  </tr>

                  <tr>
                    <td><Trans>Address Document Disclouser</Trans>
                      <ul className="list-unstyled">
                        <li><Trans>Utility Bill</Trans></li>
                        <li><Trans>Gass Bill</Trans></li>
                        <li><Trans>Mobile Bill</Trans></li>
                        <li><Trans>Water Bill</Trans></li>
                        <li><Trans>Bank Statement</Trans></li>
                      </ul>
                    </td>
                    {/* <td>--</td> */}
                    <td>
                      <FontAwesomeIcon icon="times-circle" />
                    </td>
                    <td>
                      <FontAwesomeIcon icon="check-circle" />
                    </td>
                  </tr>

                  <tr>
                    <td><Trans>Selfie Document Disclosure<br/>
                      <sub>(Take a Selfie holding your ID and upload to our system)</sub></Trans>
                    </td>
                    {/* <td>--</td> */}
                    <td>
                      <FontAwesomeIcon icon="times-circle" />
                    </td>
                    <td>
                      <FontAwesomeIcon icon="check-circle" />
                    </td>
                  </tr>

                  <tr>
                    <td></td>
                    <td>
                      <Link to={REGISTER} className="btn btn-secondary">
                        <Trans>Get Started</Trans>
                      </Link>
                    </td>

                    <td>
                      <Link to={REGISTER} className="btn btn-secondary">
                        <Trans>Get Started</Trans>
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}

export const query = graphql`
  query FeesKycPageQuery {
    allFeesJson {
      edges {
        node {
          icon
          heading
          description
          extra
        }
      }
    }

    allPricesJson {
      edges {
        node {
          price1
          price2
          price3
          flag {
            publicURL
          }
          currency {
            symbol
          }
        }
      }
    }
  }
`

export default FeesKycPage
