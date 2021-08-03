import React from "react"
import Tab from "react-bootstrap/Tab"
import Nav from "react-bootstrap/Nav"
import { graphql } from "gatsby"
import { Trans, Link } from "gatsby-plugin-react-i18next"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import SEO from "components/utilities/seo"
import Background from "components/layouts/background"
import Youtube from "components/utilities/youtube"
import SendMoneyForm from "components/forms/send-money"
import WhyUs from "components/sections/why-us"
import SimpleAs from "components/sections/simple-as"
import Section from "components/layouts/section"
import Banner from "components/layouts/banner"
import Feature from "components/layouts/feature"
import Testimonial from "components/sections/testimonial"
import Stats from "components/sections/stats"
import Carousel from "components/utilities/carousel"
import Coverage from "components/sections/coverage"

import main from "images/backgrounds/final.png"
import ambassador from "images/ambassador/ambassador1.jpg"

const IndexPage = ({ data }) => {
  return (
    <>
      <SEO title="Home" />

      <Background image={main}>
        <div className="row py-5">
          <div className="col-lg-6 col-xl-5 my-auto home-tabs">
            <Tab.Container defaultActiveKey="send">
              <Nav variant="tabs">
                <Nav.Item>
                  <Nav.Link eventKey="send">
                    <Trans>Send Money Engine</Trans>
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

          <div className="col-lg-6 col-xl-7 pb-4 pb-lg-0 my-auto text-center text-lg-left">
            <h2 className="mb-4 text-10">
              <Trans>The secure,</Trans> <br className="d-none d-xl-block" />
              <Trans>easiest and fastest</Trans>{" "}
              <br className="d-none d-xl-block" />
              <Trans>way to transfer money</Trans>
            </h2>

            <p className="mb-4 text-4">
              <Trans>
                Send &amp; Receive money to family in minutes with great rates
                and low fees. Over 180 countries and 100 currencies supported.
              </Trans>
            </p>

            <Youtube embed="8Vu1_ydSfRA">See More Details</Youtube>

            <a
              href="https://www.fintrac-canafe.gc.ca/intro-eng"
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline-light m-2"
            >
              <FontAwesomeIcon icon="thumbtack" className="mr-2" />
              Fintrack Canada
            </a>
          </div>
        </div>
      </Background>

      <WhyUs />

      <SimpleAs />

      <Section>
        <div className="row">
          <div className="col-12 d-flex flex-column align-items-center">
            <h3 className="text-uppercase text-center">Cyn Em</h3>

            <img src={ambassador} className="mb-4 img-fluid" alt="Ambassador" />

            <h4 className="text-uppercase text-center mb-0">
              ZIPREMIT <Trans>Brand Ambassador</Trans>
            </h4>
          </div>
        </div>
      </Section>

      <Section className="bg-white">
        <div className="row">
          <div className="col-lg-5 col-xl-4">
            <div className="my-auto pb-5 pb-lg-0">
              <h2 className="text-9">
                <Trans>Remittance Solutions For Anyone</Trans>
              </h2>

              <p className="text-4">
                <Trans>
                  ZipRemit is the way to go to move your money securely to your
                  loved one using our trusted, reliable and innovative system.
                  Whether it's travelling abroad, sending money to family or
                  fiends overseas, or purchasing products from a business in
                  another country, the ability to move moeny across borders
                  quickly, easily and securely is becoming a must-have. Send now
                  with us.
                </Trans>
              </p>

              <h2>
                <Trans>Fast. Easy. Secure.</Trans>
              </h2>
            </div>
          </div>

          <div className="col-lg-7 col-xl-8">
            <div className="row">
              {data.allRemittanceJson.edges.map(({ node }, index) => (
                <div className="col-12 col-sm-6 mb-4" key={index}>
                  <Banner image={node.image}>
                    <h2 className="text-3 font-weight-300 mb-0">
                      <Trans>{node.heading}</Trans>
                    </h2>
                  </Banner>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <h2 className="text-9 text-center font-weight-400">
          <Trans>What Can You Do?</Trans>
        </h2>

        <p className="text-4 text-center font-weight-300 mb-5">
          <Trans>
            We offer flexible options for everyone and are trusted by more than
            50,000 customers and communities worldwide.
          </Trans>
        </p>

        <div className="row">
          {data.allActionsJson.edges.map(({ node }, index) => (
            <div className="col-sm-6 col-md-4 col-xl-2 mb-4" key={index}>
              <Link to={node.link}>
                <Feature icon={node.icon} boxStyle="3">
                  <h3>
                    <Trans>{node.heading}</Trans>
                  </h3>
                </Feature>
              </Link>
            </div>
          ))}
        </div>
      </Section>

      <Testimonial />

      <Stats />

      <Section className="bg-white py-3">
        <div className="row">
          <div className="col-md-12">
            <Carousel
              margin={60}
              dots={false}
              smartSpeed={500}
              responsive={{
                0: { items: 2, margin: 30 },
                400: { items: 4, margin: 40 },
                768: { items: 5, margin: 50 },
                1199: { items: 6, margin: 60 },
              }}
            >
              {data.allPartnersJson.edges.map(({ node }, index) => (
                <a
                  key={index}
                  href={node.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    alt=""
                    src={node.icon.publicURL}
                    style={{ filter: "grayscale(1)" }}
                  />
                </a>
              ))}
            </Carousel>
          </div>
        </div>
      </Section>

      <Coverage />
    </>
  )
}

export const query = graphql`
  query IndexPageQuery {
    allRemittanceJson {
      edges {
        node {
          heading
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }

    allActionsJson {
      edges {
        node {
          icon
          link
          heading
        }
      }
    }

    allPartnersJson {
      edges {
        node {
          link
          icon {
            publicURL
          }
        }
      }
    }
  }
`

export default IndexPage
