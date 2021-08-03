import React from "react"
import { graphql } from "gatsby"
import { Trans } from "gatsby-plugin-react-i18next"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import SEO from "components/utilities/seo"
import Background from "components/layouts/background"
import Section from "components/layouts/section"
import Feature from "components/layouts/feature"
import AgentContactForm from "components/forms/agent-contact"

import agent from "images/backgrounds/agent.jpg"
import become from "images/agent/become.png"

const AgentAffiliatePage = ({ data }) => {
  return (
    <>
      <SEO title="Agent/Affiliate" />

      <Background image={agent} opacity="2" scroll>
        <div className="row">
          <div className="col-12">
            <h1 className="text-11 font-weight-500 mb-4">
              <Trans>Agent/Affiliate</Trans>
            </h1>

            <p className="text-5 line-height-4 mb-4">
              <Trans>
                Our agent/affiliate programs lets people who spread the word about our services earn unlimited money. If you have a website that’s read by people who might be sending money home to friends and family, we give you a banner or a personal link to our website, and can earn lots of cash for every successful referral/money sent.
              </Trans>
            </p>
          </div>
        </div>
      </Background>

      <Section className="bg-white">
        <div className="row align-items-center">
          <div className="col-lg-12 d-flex">
            <div className="my-auto px-0 px-lg-5 mx-2">
              <h2 className="text-9">
                <Trans>How to Become a Zip Agent</Trans>
              </h2>
            </div>
          </div>

          <div className="col-lg-6 d-flex order-2 order-lg-1">
            <div className="my-auto px-0 px-lg-5 mx-2">
              {data.allAgentHowJson.edges.map(({ node }, index) => (
                <p className="d-flex text-3" key={index}>
                  <span className="mr-2"><FontAwesomeIcon icon="check" /></span>
                  <span className="ml-2"><Trans>{node.how}</Trans></span>
                </p>
              ))}
            </div>
          </div>

          <div className="col-lg-6 d-flex order-1 order-lg-2">
            <div className="my-auto px-0 px-lg-5 mx-2">
              <img src={become} alt="Agent" className="img-fluid" width="320" />
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <h2 className="text-9 mb-4 text-center">
          <Trans>Reasons to Partner with Us</Trans>
        </h2>

        <div className="row">
          {data.allAgentReasonsJson.edges.map(({ node }, index) => (
            <div className="col-sm-6 col-lg-4 col-xl-2 mb-4" key={index}>
              <Feature image={node.image.publicURL} boxStyle="3">
                <h3><Trans>{node.heading}</Trans></h3>
              </Feature>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-white">
        <div className="row align-items-center">
          <div className="col-lg-7 d-flex">
            <div className="px-0 px-lg-5 mx-2">
              <h2 className="text-9">
                <Trans>Become a ZIP Agent</Trans>
              </h2>

              <h6>
                <Trans>
                  How can you grow your portfolio, attract new customers and generate new revenue paths?
                </Trans>
              </h6>
                  
              <p className="mt-4">
                <Trans>
                  We're committed to bringing our service to every corner of the emerging African markets and beyond. Ensure to provide your referral link, it’s easy to do, and we provide full support. If you just want to find out more, or have any questions, drop us a line at <strong><a href="mailto:agent@zipcoinremit.com">agent@zipcoinremit.com</a></strong> or complete the contact us form.
                </Trans>
              </p>
            </div>
          </div>

          <div className="col-lg-5">
            <AgentContactForm />
          </div>
        </div>
      </Section>
    </>
  )
}

export const query = graphql`
  query AgentAffiliatePageQuery {
    allAgentHowJson {
      edges {
        node {
          how
        }
      }
    }

    allAgentReasonsJson {
      edges {
        node {
          heading
          image {
            publicURL
          }
        }
      }
    }
  }
`

export default AgentAffiliatePage
