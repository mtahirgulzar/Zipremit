import React from "react"
import Tab from "react-bootstrap/Tab"
import Nav from "react-bootstrap/Nav"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import { Trans } from "gatsby-plugin-react-i18next"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import SEO from "components/utilities/seo"
import Background from "components/layouts/background"
import Section from "components/layouts/section"
import Youtube from "components/utilities/youtube"
import DonateForm from "components/forms/donate"
import VolunteerForm from "components/forms/volunteer"
import FundraiserForm from "components/forms/fundraiser"
import PartnerForm from "components/forms/partner"
import SponsorForm from "components/forms/sponsor"
import ReferForm from "components/forms/refer"

import zipfoundation from "images/backgrounds/zipfoundation.jpg"
import handshake from "images/backgrounds/handshake.jpg"
import donate from "images/backgrounds/donate.jpg"
import cure from "images/backgrounds/cure.jpg"
import collaborate from "images/foundation/collaborate.jpg"

const ZipFoundationPage = ({ data }) => {
  const tabs = ["donate", "volunteer", "fundraiser", "partner", "sponsor", "refer"]
  
  return (
    <>
      <SEO title="Zip Foundation" />

      <Background image={zipfoundation} opacity="5" scroll>
        <div className="row text-center">
          <div className="col-lg-10 col-md-12 m-auto">
            <h1 className="mb-4">
              <Trans>Bringing Smiles to Millions</Trans>
            </h1>

            <p className="text-3">
              <Trans>
                With your help we support families with children facing adversity from life threatening illnesses via gift-giving and special events targeted to children up to the age of 18.
              </Trans>
            </p>

            <p className="text-3">
              <Trans>
                Our volunteers are the backbone of our organization. Living is Giving. If you are willing to give your time and join a team of great volunteers for a wonderful cause, please click below to contact us
              </Trans>
            </p>
            
            <a className="btn btn-secondary mt-3 mb-0" href="#involvement">
              <Trans>Become A Volunteer</Trans>
            </a>
          </div>
        </div>
      </Background>

      <section>
        <div className="row m-0">
          <div className="col-12 col-sm-6 col-md-4 p-0">
            <Background image={handshake} className="h-100 py-4" scroll>
              <div className="text-center text-white py-3 py-md-0">
                <h4 className="text-uppercase text-white">
                  <span className="font-weight-300">
                    <Trans>
                      Thank You For All Your
                    </Trans>
                  </span>

                  {" "}

                  <span className="text-underline">
                    <Trans>
                      Support
                    </Trans>
                  </span>
                </h4>

                <div className="d-flex justify-content-around mt-3">
                  <div>
                    <h2 className="text-primary mb-0">
                      5000
                    </h2>

                    <p className="mb-0 text-2">
                      <Trans>
                        People Helped
                      </Trans>
                    </p>
                  </div>

                  <div>
                    <h2 className="text-primary mb-0">
                      120
                    </h2>

                    <p className="mb-0 text-2">
                      <Trans>
                        Volunteers
                      </Trans>
                    </p>
                  </div>
                </div>
              </div>
            </Background>
          </div>

          <div className="col-12 col-sm-6 col-md-4 p-0">
            <div className="h-100 bg-secondary p-4">
              <h4 className="text-body mt-3 mt-md-0">
                <Trans>
                  Next Goals
                </Trans>
              </h4>

              <ul className="goals mb-3 mb-md-0">
                {data.allGoalsJson.edges.map(({ node }, index) => (
                  <li key={index}>
                    <span>
                      <Trans>
                        {node.goal}
                      </Trans>
                    </span>

                    <span>
                      {node.when}
                    </span>
                  </li>    
                ))}
              </ul>
            </div>
          </div>

          <div className="col-12 col-md-4 p-0">
            <Background image={donate} className="h-100 py-4" opacity="4" scroll>
              <div className="text-center py-3 py-md-0">
                <h4 className="text-white text-underline">
                  <Trans>
                    Help Us
                  </Trans>
                </h4>

                <h4 className="text-white">
                  <Trans>
                    To Save Lives.
                  </Trans>
                </h4>

                <h4 className="text-white">
                  <Trans>
                    To Inspire Others.
                  </Trans>
                </h4>
                
                <a className="btn btn-secondary text-uppercase mt-3" href="#involvement">
                  <Trans>
                    Donate Now
                  </Trans>
                </a>
              </div>
            </Background>
          </div>
        </div>
      </section>

      <Section className="bg-light">
        <div className="row">
          <div className="d-flex flex-wrap col-lg-6">
            <h2 className="text-7 w-100 text-center text-lg-left">
              <Trans>Who We Are</Trans>
            </h2>

            <p className="text-3">
              <Trans>
                ZIP FOUNDATION is a non-profit organization built to empower, support and work with children, youth, women and men who are going through life threatening diseases such as Leukemia. We raise money towards cancer research, treatment and community awareness.
              </Trans>
            </p>

            <h2 className="text-7 w-100 text-center text-lg-left">
              <Trans>Why We Do This</Trans>
            </h2>

            <p className="text-3">
              <Trans>
                Kim Chivhima’s son is a survivor of leukemia and we are passionate about helping our sick kids. We can all make a difference. No more community agony and suffering. Lets our kids be kids. Please join us today to raise funds to advance research, treatment and awareness while building a better tomorrow.
              </Trans>
            </p>
          </div>

          <div className="col-lg-6 d-flex align-items-center justify-content-center">
            <Youtube.Figure className="mt-5 mt-lg-0" embed="VGbWJfvPfjk" />
          </div>
        </div>
      </Section>

      <Background image={cure} className="py-5">
        <div className="row text-center">
          <div className="col py-5">
            <h2 className="text-8">
              <Trans>Who We Help</Trans>
            </h2>

            <p className="mb-0 text-4">
              <Trans>Communities, sick children, research centres and hospitals</Trans>
            </p>
          </div>
        </div>
      </Background>

      <Section className="bg-light-4">
        <h2 className="text-9 text-center mb-5">
          <Trans>Learn More About What We Do</Trans>
        </h2>

        <div className="row">
          {data.allFoundationJson.edges.map(({ node }, index) => (
            <div className="col-sm-6 col-lg-3 mb-4 mb-lg-0" key={index}>
              <div className="h-100 shadow-sm">
                <Img alt="ZipCoinRemit" fluid={node.image.childImageSharp.fluid} />

                <div className="p-3 text-center">
                  <h2 className="text-3 font-weight-300 mb-0">
                    <Trans>{node.title}</Trans>
                  </h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h2 className="text-8 mb-3">
              <Trans>
                Collaborate. Donate. Inspire.
              </Trans>
            </h2>

            {data.allCollaborateJson.edges.map(({ node }, index) => (
              <p className="d-flex text-3" key={index}>
                <span className="mr-3 text-primary">
                  <FontAwesomeIcon icon="check-circle" />
                </span>

                <Trans>
                  {node.item}
                </Trans>
              </p>
            ))}
          </div>

          <div className="col-lg-6 mt-3 mt-lg-0">
            <img alt="ZipCoinRemit" src={collaborate} className="img-fluid" />
          </div>
        </div>
      </Section>

      <Section className="bg-offwhite" id="involvement">
        <div className="row">
          <div className="col-12 section-heading">
            <h2 className="section-title">
              <Trans>Get Involved</Trans>
            </h2>
          </div>
        </div>

        <div className="row">
          <div className="col-12 foundation-tabs">
            <Tab.Container defaultActiveKey="donate">
              <Nav variant="tabs">
                {tabs.map((item, index) => (
                  <Nav.Item key={index}>
                    <Nav.Link eventKey={item}>
                      <Trans>{item}</Trans><span className="nav-arrow"></span>
                    </Nav.Link>
                  </Nav.Item>
                ))}
              </Nav>

              <Tab.Content>
                <Tab.Pane eventKey="donate"><DonateForm /></Tab.Pane>
                <Tab.Pane eventKey="volunteer"><VolunteerForm /></Tab.Pane>
                <Tab.Pane eventKey="fundraiser"><FundraiserForm /></Tab.Pane>
                <Tab.Pane eventKey="partner"><PartnerForm /></Tab.Pane>
                <Tab.Pane eventKey="sponsor"><SponsorForm /></Tab.Pane>
                <Tab.Pane eventKey="refer"><ReferForm /></Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </div>
        </div>
      </Section>
    </>
  )
}

export const query = graphql`
  query ZipFoundationPageQuery {
    allGoalsJson {
      edges {
        node {
          goal
          when
        }
      }
    }

    allFoundationJson {
      edges {
        node {
          title
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

    allCollaborateJson {
      edges {
        node {
          item
        }
      }
    }
  }
`

export default ZipFoundationPage
