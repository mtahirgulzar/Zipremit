import React from "react"
import Tab from "react-bootstrap/Tab"
import Nav from "react-bootstrap/Nav"
import Image from "gatsby-image"
import { graphql } from "gatsby"
import { Link, Trans } from "gatsby-plugin-react-i18next"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import SEO from "components/utilities/seo"
import Background from "components/layouts/background"
import Youtube from "components/utilities/youtube"
import SendMoneyForm from "components/forms/send-money"
import Section from "components/layouts/section"
import WhyUs from "components/sections/why-us"
import SimpleAs from "components/sections/simple-as"
import Testimonial from "components/sections/testimonial"
import Faq from "components/sections/faq"

import send from "images/backgrounds/send.jpg"
import transaction from "images/backgrounds/transaction.jpg"
import refer from "images/others/refer.jpg"
import ambassador from "images/ambassador/ambassador3.jpg"

const SendMoneyPage = ({ data }) => {
  return (
    <>
      <SEO title="Send Money" />

      <Background image={send} opacity="5">
        <div className="row py-5">
          <div className="col-lg-6 col-xl-7 pb-4 pb-lg-0 my-auto text-center text-lg-left">
            <h2 className="mb-4 text-10">
              <span className="font-weight-400 text-10">
                <Trans>The best way to</Trans>
              </span>
              <br />
              <br />

              <span>
                <Trans>Send Money</Trans>
              </span>
            </h2>

            <p className="mb-4 text-4">
              <Trans>
                Send money with a better exchange rate and avoid excessive bank
                fees.
              </Trans>
            </p>

            <Youtube embed="daip7ZSMkUM">See How It Works</Youtube>
          </div>

          <div className="col-lg-6 col-xl-5 my-auto home-tabs">
            <Tab.Container defaultActiveKey="send">
              <Nav variant="tabs">
                <Nav.Item>
                  <Nav.Link eventKey="send">
                    <Trans>Send Money</Trans>
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Link to="/track" className="nav-link">
                    <Trans>Track Money</Trans>
                  </Link>
                </Nav.Item>
              </Nav>

              <Tab.Content>
                <Tab.Pane eventKey="send">
                  <SendMoneyForm />
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </div>
        </div>
      </Background>

      <Section className="bg-offwhite">
        <div className="row text-center mb-4">
          <div className="col-lg-8 col-md-10 m-auto">
            <h2 className="text-9 line-height-3 mb-0">
              <Trans>Our Payment Methods</Trans>
            </h2>
            <br />

            <h4 className="text-4 text-uppercase">
              <Trans>Simple Sending. Simple Spending.</Trans>
            </h4>

            <p>
              <Trans>
                We make online transfers faster and easier than ever. Choose how
                and when you send, with great exchange rates and low fees.
              </Trans>
            </p>
          </div>
        </div>

        <div className="row align-items-center">
          <div className="col-12 col-md-5 order-2 order-md-1 d-flex flex-column align-items-center">
            <img src={ambassador} className="mb-4 img-fluid" alt="Ambassador" />

            <h4 className="text-uppercase text-center mb-0">
              ZIPREMIT <Trans>Brand Ambassador</Trans>
            </h4>
          </div>

          <div className=" col-md-7 m-auto order-1 order-md-2">
            <h5 className="text-center text-uppercase">
              <Trans>Ways To Pay</Trans>
            </h5>
            <br />
            <br />

            <div className="row">
              {data.allPayJson.edges.map(({ node }, index) => (
                <div className="col-sm-6 text-center m-auto" key={index}>
                  <div
                    className="mt-4 h-100 bg-white shadow-sm p-4 d-flex flex-column align-items-center justify-content-center"
                    style={{ minHeight: 149 }}
                  >
                    <Image fixed={node.image.childImageSharp.fixed} />

                    <h5 className="text-2 mt-4">
                      <Trans>{node.method}</Trans>
                    </h5>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <WhyUs />

      <SimpleAs />

      <Testimonial />

      <Faq />

      <Section className="bg-offwhite">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h2>
              <Trans>Refer &amp; Earn Program</Trans>
            </h2>

            <p className="text-2">
              <strong>
                <Trans>
                  Refer a friend and earn unlimited cash for each successful
                  referral!
                </Trans>
              </strong>
            </p>

            <p className="text-2">
              <Trans>
                At ZIPREMIT we think that great experiences should be shared.
                So, if you think that your friends would enjoy an innovative and
                creative way of sending money from Canada to Africa and beyond;
                then refer them to ZIPREMIT and earn unlimited cash for each
                successful referral.
              </Trans>
            </p>

            <p className="text-2">
              <strong>
                <Trans>How to refer a friend:</Trans>
              </strong>
            </p>

            <ol>
              {data.allReferJson.edges.map(({ node }, index) => (
                <li key={index}>
                  <Trans>{node.item}</Trans>
                </li>
              ))}
            </ol>

            {/* <p className="text-2">
              <a href="/guides/refer" target="_blank" rel="noreferrer" className="text-2">
                <Trans>Click here</Trans>
              </a>{" "}

              <Trans>for a step by step guide on how to refer.</Trans>
            </p> */}

            <p className="text-2 mb-lg-0">
              <a
                href="/terms/refer"
                target="_blank"
                rel="noreferrer"
                className="text-2"
              >
                <Trans>Click here</Trans>
              </a>{" "}
              <Trans>for Terms and Conditions.</Trans>
            </p>
          </div>

          <div className="col-lg-6">
            <img src={refer} className="img-fluid" alt="Refer" />
          </div>
        </div>
      </Section>

      <Background image={transaction} opacity="8" className="p-5">
        <div className="row">
          <div className="col-md-8 align-items-center text-center text-md-left">
            <h2 className="text-6 font-weight-400 mb-3 mb-md-0">
              <Trans>SIGN UP TODAY AND ENJOY OUR BEST AND LOW FEES!</Trans>
            </h2>
          </div>
          <div className="col-md-4 text-center">
            <Link
              to="/en/register"
              className="btn btn-outline-light text-nowrap ml-md-4"
            >
              <Trans>Sign up Now </Trans>
            </Link>
          </div>
        </div>
      </Background>
    </>
  )
}

export const query = graphql`
  query SendMoneyPageQuery {
    allPayJson {
      edges {
        node {
          method
          image {
            childImageSharp {
              fixed {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }

    allReferJson {
      edges {
        node {
          item
        }
      }
    }
  }
`

export default SendMoneyPage
