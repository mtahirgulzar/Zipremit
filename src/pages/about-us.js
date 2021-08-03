import React from "react"
import { graphql } from "gatsby"
import { Trans, useTranslation } from "gatsby-plugin-react-i18next"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import SEO from "components/utilities/seo"
import Background from "components/layouts/background"
import Youtube from "components/utilities/youtube"
import Section from "components/layouts/section"
import Grid from "components/layouts/grid"
import Profile from "components/layouts/profile"
import Stats from "components/sections/stats"

import about from "images/backgrounds/about.jpg"
import mission from "images/about/mission.jpg"
import { REGISTER } from "utilities/urls"

const AboutUsPage = ({ data }) => {
  return (
    <>
      <SEO title="About Us" />

      <Background image={about} scroll>
        <div className="row">
          <div className="col-12">
            <h1 className="text-11 font-weight-500 mb-4">
              <Trans>About ZIPRemit</Trans>
            </h1>

            <p className="text-5 line-hight-4 mb-4">
              <Trans>Our mission is to help you save on transfer fees and exchange rates!</Trans>
            </p>

            <a href={REGISTER} className="btn btn-secondary m-2">
              <Trans>Open A Free Account</Trans>
            </a>

            <Youtube embed="97-elrhX6Lw">See How It Works</Youtube>
          </div>
        </div>
      </Background>

      <Section>
        <div className="row">
          <div className="col-12">
            <div className="px-lg-5 mx-2">
              <h2 className="text-9">
                <Trans>Who We Are</Trans>
              </h2>

              <p className="text-4">
                <Trans>
                  We are new entrant to the remittance space who will focus on providing fast and low cost service that is community focused to the African market and beyond.
                </Trans>
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-white">
        <div className="row align-items-center">
          <div className="col-lg-6 d-flex order-2 order-lg-1">
            <div className="px-0 px-lg-5 my-auto">
              <h2 className="text-9 mb-4">
                <Trans>Our Values</Trans>
              </h2>

              <h4 className="text-4 font-weight-500">
                <Trans>Our Mission</Trans>
              </h4>

              <p className="text-3">
                <Trans>To help our communities to send more money to family by using low cost, simple and innovative technology</Trans>.
              </p>

              <h4 className="text-4 font-weight-500">
                <Trans>Our Vision</Trans>
              </h4>

              <p className="text-3">
                <Trans>To be the global leader in money transfer solutions driven to support our communities</Trans>.
              </p>

              <h4 className="text-4 font-weight-500">
                <Trans>Our Goals</Trans>
              </h4>

              <ul className="list-unstyled text-3">
                <li><Trans>To support local entrepreneurship in Africa</Trans></li>
                <li><Trans>To sponsor local students</Trans></li>
                <li><Trans>To engage with local communities</Trans></li>
                <li><Trans>To invest in our local communities</Trans></li>
                <li><Trans>To empower minorities, women and youth</Trans></li>
              </ul>
            </div>
          </div>

          <div className="col-lg-6 order-1 order-lg-2">
            <div className="row">
              <div className="col-6 col-lg-8 mt-lg-n5 mb-4 mb-lg-0">
                <img src={mission} className="img-fluid shadow-lg rounded-lg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="row align-items-center">
          <div className="col-lg-6 order-2 order-lg-1 d-flex align-items-center justify-content-center">
            <Youtube.Figure embed="VGbWJfvPfjk" />
          </div>

          <div className="col-lg-6 d-flex order-1 order-lg-2">
            <div className="my-auto px-0 px-lg-5">
              <h2 className="text-9 font-weight-500 mb-2">
                <Trans>Our Norms</Trans>
              </h2>

              <ul className="nav norms text-3">
                {data.allNormsJson.edges.map(({ node }, index) => (
                  <li key={index}>
                    <FontAwesomeIcon icon="check" />
                    <span><Trans>{node.norm}</Trans></span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <br /><br />

        <div className="row no-gutters">
          <div className="col-md-12">
            <h4 className="text-4 text-center text-uppercase">
              <Trans>Cost matters. It's your money. We want you to keep more of it</Trans>
            </h4>
          </div>
        </div>
      </Section>

      <Section className="bg-light-4">
        <h2 className="text-9 text-center">
          <Trans>Our Leadership</Trans>
        </h2>

        <h4 className="text-4 text-center text-uppercase">
          <Trans>Advancing the company and money transfer</Trans>

          <br /><br />

          <span className="text-primary">
            <Trans>Through talent and innovation</Trans>
          </span>
        </h4>

        <p className="text-4 text-center mb-5">
          <Trans>
            We are global experts focused on finding innovative, customer-driven solutions that create long-term community value and sustainability. Team is full of passion, dedication and inspired to ensure more money to family.
          </Trans>
        </p>

        <Grid>
          {data.allTeamJson.edges.map(({ node }, index) => (
            <div className="col-sm-6 col-md-4 col-lg-4" key={index}>
              <Profile image={node.image} social={node.social}>
                <h3>{node.name}</h3>
                <p className="text-muted">{node.title}</p>
              </Profile>
            </div>
          ))}
        </Grid>
      </Section>

      <Section className="bg-light-2">
        <div className="col-sm-4 m-auto text-center">
          <a href={REGISTER} className="btn btn-secondary mb-5 w-60">
            <Trans>Send Money Now</Trans>
          </a>
        </div>
        <br></br>
        <h2 className="text-9 text-center">
          <Trans>ZipRemit Legal Minds &amp; Interpretation Of Law</Trans>
        </h2>

        <Grid>
          {data.allLegalJson.edges.map(({ node }, index) => (
            <div className="col-sm-6 col-md-4 col-lg-3" key={index}>
              <Profile image={node.image} social={node.social}>
                <h3>{node.name}</h3>
                <p className="text-muted">{node.title}</p>
              </Profile>
            </div>
          ))}
        </Grid>
      </Section>

      <Section>
        <h2 className="text-9 text-center">
          <Trans>Our Advisors</Trans>
        </h2>

        <Grid>
          {data.allAdvisorsJson.edges.map(({ node }, index) => (
            <div className="col-sm-6 col-md-4 col-lg-3" key={index}>
              <Profile image={node.image} social={node.social}>
                <h3>{node.name}</h3>
                <p className="text-muted">{node.title}</p>
              </Profile>
            </div>
          ))}
        </Grid>
      </Section>

      <Section className="bg-white">
        <h2 className="text-9 text-center mb-5">
          <Trans>Meet Our Country Managers</Trans>
        </h2>

        <div className="row">
          <table className="table table-bordered managers">
            <thead>
              <tr>
                <th><Trans>Flag</Trans></th>
                <th><Trans>Country</Trans></th>
                <th><Trans>Country Manager</Trans></th>
              </tr>
            </thead>

            <tbody>
              {data.allManagersJson.edges.map(({ node }, index) => (
                <tr key={index}>
                  <td><img alt="" src={node.flag.publicURL} /></td>
                  <td><strong>{node.country}</strong></td>
                  <td><strong>{node.manager}</strong></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Stats />
    </>
  )
}

export const query = graphql`
  query AboutUsPage {
    allNormsJson {
      edges {
        node {
          norm
        }
      }
    }

    allTeamJson {
      edges {
        node {
          name
          title
          social {
            icon
            link
          }
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

    allLegalJson {
      edges {
        node {
          name
          title
          social {
            icon
            link
          }
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

    allAdvisorsJson {
      edges {
        node {
          name
          title
          social {
            icon
            link
          }
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

    allManagersJson {
      edges {
        node {
          manager
          country
          flag {
            publicURL
          }
        }
      }
    }
  }
`

export default AboutUsPage
