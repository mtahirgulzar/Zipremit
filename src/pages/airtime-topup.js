import React from "react"
import { graphql } from "gatsby"
import { Trans } from "gatsby-plugin-react-i18next"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import SEO from "components/utilities/seo"
import Background from "components/layouts/background"
import Section from "components/layouts/section"
import Coverage from "components/sections/coverage"

import airtime from "images/backgrounds/airtime.jpg"
import how from "images/airtime/how.png"
import stats from "images/airtime/stats.png"
import kim from "images/airtime/kim.jpg"
import ambassador from "images/ambassador/ambassador2.jpg"
import { LOGIN } from "utilities/urls"

const AirtimeTopupPage = ({ data }) => {
  return (
    <>
      <SEO title="Airtime TopUp" />

      <Background image={airtime} opacity="5">
        <div className="row text-center py-5">
          <div className="col-12 col-md-10 col-lg-8 m-auto">
            <h2 className="text-11 mb-5">
              <Trans>Delivering mobile top-up to millions worldwide</Trans>
            </h2>

            <p className="text-4">
              <Trans>
                Recharge quickly and stay connected with the people that matter
                most.
              </Trans>
            </p>
          </div>
        </div>
      </Background>

      <Section className="bg-white">
        <div className="row">
          <div className="col-12">
            <div className="section-heading">
              <h2 className="section-title text-uppercase">
                <Trans>Three Simple Ways To Recharge Your Family Mobile</Trans>
              </h2>
            </div>

            <img src={how} className="img-fluid" alt="Steps" />
          </div>
        </div>
      </Section>

      <Section>
        <div className="row">
          <div className="col-12">
            <div className="section-heading">
              <h5 className="section-title text-lg-left">
                <Trans>With ZIPREMIT means more magic to everyone</Trans>
              </h5>
            </div>

            <p className="text-5 color-1 mb-5">
              <Trans>
                Airtime Sharing! Sending airtime from the diaspora to your
                friends across the world has never been this easy! Refill your
                family’s phone today.
              </Trans>
            </p>
          </div>
        </div>

        <div className="row align-items-center">
          <div className="col-12 col-md-7">
            <div className="section-heading">
              <h5 className="section-title text-left">
                <Trans>Why Us</Trans>
              </h5>
            </div>

            <ul className="nav airtime-why text-3">
              {data.allAirtimeWhyJson.edges.map(({ node }, index) => (
                <li key={index}>
                  <FontAwesomeIcon icon="check-circle" />
                  <span>
                    <Trans>{node.item}</Trans>
                  </span>
                </li>
              ))}

              <ul>
                <li>
                  <Trans>Email Payment</Trans>
                </li>
                <li>
                  ZipWallet{" "}
                  <small>
                    (<b>ZIPCASH/CAD/USD/GBP/EUR/ZAR/ZIPALL/AUD</b>)
                  </small>
                </li>
                <li>
                  <Trans>Debit/Credit Card</Trans>
                </li>
                <li>
                  INTERAC <Trans>Online</Trans>
                </li>
                <li>
                  <Trans>Bank Deposit</Trans>
                </li>
              </ul>
            </ul>
          </div>

          <div className="col-12 col-md-5">
            <img src={ambassador} className="img-fluid" alt="Ambassador" />
          </div>
        </div>

        <div className="row justify-content-center mt-5">
          <a
            href={LOGIN}
            className="btn btn-secondary text-uppercase text-white"
          >
            <Trans>Airtime Top Up Now</Trans>
          </a>
        </div>
      </Section>

      <Section className="bg-light">
        <div className="row align-items-center">
          <div className="col-12 col-sm-5">
            <img src={kim} className="img-fluid" alt="Kim" />
          </div>

          <div className="col-12 col-sm-7">
            <div className="section-heading">
              <h5 className="section-title">
                <Trans>ZIPREMIT Mania</Trans>
              </h5>
            </div>

            <blockquote className="text-center">
              <q className="text-6 color-blue">
                <Trans>
                  Mobile phones can change lives and we can. It’s a massive
                  responsibility and a global opportunity. That’s why we do
                  everything we can every day to bring families together via
                  airtime top-up to impact lives.
                </Trans>
              </q>

              <p className="text-4 font-weight-500 mt-4 mb-0">
                <cite className="text-uppercase">
                  KIM CHIVHIMA - <Trans>Founder</Trans>
                </cite>
              </p>
            </blockquote>
          </div>
        </div>
      </Section>

      <Section className="bg-white p-0">
        <img src={stats} className="img-fluid" alt="Stats" />
      </Section>

      <Coverage />

      <Section className="bg-white">
        <div className="row justify-content-center mb-5">
          <a
            href={LOGIN}
            className="btn btn-secondary text-uppercase text-white"
          >
            <Trans>Airtime Top Up Now</Trans>
          </a>
        </div>

        <div className="row">
          <div className="section-heading">
            <h5 className="section-title">
              <Trans>
                Worldwide top-up to over 500 networks across 140 countries
              </Trans>
            </h5>
          </div>
        </div>

        <div className="row">
          {data.allTelcosJson.edges.map(({ node }, index) => (
            <div key={index} className="col-3 col-lg-2">
              <div className="h-100 d-flex align-items-center">
                <img
                  src={node.image.publicURL}
                  className="img-fluid"
                  alt="Telco Company"
                />
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  )
}

export const query = graphql`
  query AirtimeTopupPageQuery {
    allAirtimeWhyJson {
      edges {
        node {
          item
        }
      }
    }

    allTelcosJson {
      edges {
        node {
          image {
            publicURL
          }
        }
      }
    }
  }
`

export default AirtimeTopupPage
