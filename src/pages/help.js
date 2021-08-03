import React from "react"
import { graphql } from "gatsby"
import { Link, Trans } from "gatsby-plugin-react-i18next"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import SEO from "components/utilities/seo"
import Background from "components/layouts/background"
import HelpSearchForm from "components/forms/help-search"
import Feature from "components/layouts/feature"
import Section from "components/layouts/section"
import Faq from "components/sections/faq"

import help from "images/backgrounds/help.jpg"

const HelpPage = ({ data }) => {
  return (
    <>
      <SEO title="Help" />

      <Background image={help} opacity="9" bg="offprimary">
        <div className="row align-items-center text-center">
          <div className="col-12">
            <h1 className="text-11 mb-3">
              <Trans>How can we help you?</Trans>
            </h1>
          </div>

          <div className="col-md-10 col-lg-8 col-xl-6 mx-auto">
            <HelpSearchForm />
          </div>
        </div>
      </Background>

      <Section className="section py-3 my-3 py-sm-5 my-sm-5">
        <div className="row">
          {data.allHelpTopicsJson.edges.map(({ node }, index) => (
            <div className="col-sm-6 col-lg-3 mb-4 mb-lg-0" key={index}>
              <div className="bg-white shadow-sm rounded p-4 pt-5">
                <Feature icon={node.icon} boxStyle="1">
                  <h3 className="text-body text-4 mt-4">
                    <Trans>{node.topic}</Trans>
                  </h3>

                  <p className="pb-0">
                    <Link className="text-muted btn-link" to={node.link}>
                      <Trans>See articles</Trans>
                      <FontAwesomeIcon
                        icon="chevron-right"
                        className="text-1 ml-1"
                      />
                    </Link>
                  </p>
                </Feature>
              </div>
            </div>
          ))}
        </div>

        <div className="row justify-content-center mt-5">
          <Link to="/send-money" className="btn btn-secondary">
            <Trans>Send Money Now</Trans>
          </Link>
        </div>
      </Section>

      <Faq />

      <Section className="section py-4 my-4 py-sm-5 my-sm-5">
        <div className="row">
          <div className="col-lg-6">
            <div className="h-100 bg-white shadow-sm rounded p-4 pl-sm-0">
              <div className="row no-gutters">
                <div className="col-12 col-sm-auto d-flex align-items-center justify-content-center">
                  <span className="text-13 text-light px-4 ml-3 mr-2 mb-4 mb-sm-0">
                    <FontAwesomeIcon icon="envelope" />
                  </span>
                </div>

                <div className="col-sm text-center text-sm-left">
                  <h5 className="text-3 text-body">
                    <Trans>Can't find what you're looking for?</Trans>
                  </h5>

                  <p className="text-muted mb-0">
                    <Trans>
                      We want to answer all of your queries. Get in touch and
                      we'll get back to you as soon as we can.
                    </Trans>{" "}
                    <Link className="btn-link" to="/contact-us">
                      <Trans>Contact Us</Trans>

                      <span className="text-1 ml-1">
                        <FontAwesomeIcon icon="chevron-right" />
                      </span>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 mt-4 mt-lg-0">
            <div className="h-100 bg-white shadow-sm rounded p-4 pl-sm-0">
              <div className="row no-gutters">
                <div className="col-12 col-sm-auto d-flex align-items-center justify-content-center">
                  <span className="text-13 text-light px-4 ml-3 mr-2 mb-4 mb-sm-0">
                    <FontAwesomeIcon icon="comment-alt" />
                  </span>
                </div>

                <div className="col-sm text-center text-sm-left">
                  <h5 className="text-3 text-body">
                    <Trans>Technical questions</Trans>
                  </h5>

                  <p className="text-muted mb-0">
                    <Trans>
                      Have some technical questions? Hit us up on live chat or
                      whatever.
                    </Trans>{" "}
                    <Link className="btn-link" to="/help">
                      <Trans>Click here</Trans>

                      <span className="text-1 ml-1">
                        <FontAwesomeIcon icon="chevron-right" />
                      </span>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}

export const query = graphql`
  query HelpPageQuery {
    allHelpTopicsJson {
      edges {
        node {
          icon
          topic
          link
        }
      }
    }
  }
`

export default HelpPage
