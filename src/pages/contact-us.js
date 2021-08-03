import React from "react"
import { graphql } from "gatsby"
import { Link, Trans } from "gatsby-plugin-react-i18next"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import SEO from "components/utilities/seo"
import Background from "components/layouts/background"
import Feature from "components/layouts/feature"
import ContactUsForm from "components/forms/contact-us"

import contact from "images/backgrounds/contact.jpg"

const ContactUsPage = ({ data }) => {
  return (
    <>
      <SEO title="Contact Us" />

      <Background image={contact} opacity="5" scroll>
        <div className="row">
          <div className="col-12">
            <h1 className="text-11 font-weight-500 mb-4">
              <Trans>Have Questions? We Have Answeres!</Trans>
            </h1>

            <p className="text-5 line-height-4 mb-4">
              <Trans>
                Most questions can be answered instantly from our FAQ page. Prefer to send an email? Not a problem. Just fill out the fields below and we'll be in touch shortly.
              </Trans>    
            </p>
          </div>
        </div>
      </Background>

      <section className="section">
        <div className="container">
          <div className="col-12 mb-4">
            <div className="row">
              {data.allContactJson.edges.map(({ node }, index) => (
                <div className="col-md-6 col-lg-3 mb-4" key={index}>
                  <div className="h-100 bg-white shadow-md rounded px-4 py-5">
                    <Feature boxStyle="1" icon={node.icon}>
                      <h3 className="mt-4"><Trans>{node.heading}</Trans></h3>
                      <p className="mb-0" dangerouslySetInnerHTML={{__html: node.description}} />
                    </Feature>
                  </div>
                </div>
              ))}

              <div className="col-12">
                <div className="text-center py-5 px-2">
                  <h2 className="text-8">
                    <Trans>Get in touch</Trans>
                  </h2>
                  
                  <p className="text-4 font-weight-300">
                    <Trans>Feeling social, connect with us today.</Trans>
                  </p>
                  
                  <ul className="social-icons social-icons-lg social-icons-colored">
                    {data.allSocialJson.edges.map(({ node }, index) => (
                      <li key={index} className={node.icon}>
                        <a href={node.link} target="_blank" rel="noreferrer" title={node.title}>
                          <FontAwesomeIcon icon={['fab', `${node.icon}`]} />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="col-12 mb-4">
            <div className="row">
              <div className="col-md-7 pr-md-0">
                <div className="bg-white" style={{ padding: "40px" }}>
                  <ContactUsForm />
                </div>
              </div>

              <div className="col-md-5 pl-md-0">
                <div className="bg-secondary contact-info">
                  <h2><Trans>Contact Info</Trans></h2>

                  <p><Trans>We Always love to hear back from our fans!</Trans></p>

                  {data.allAddressJson.edges.map(({ node }, index) => (
                    <address key={index}>
                      <div className="icon"><FontAwesomeIcon icon={node.icon} /></div>
                      <span className="title"><Trans>{node.heading}</Trans></span>
                      <span dangerouslySetInnerHTML={{__html: `${node.description}`}} />
                    </address>
                  ))}

                  <address>
                    <div className="icon">
                      <FontAwesomeIcon icon="question" />
                    </div>

                    <span className="title">
                      <Trans>Support Help Desk</Trans>
                    </span>
                      
                    <div className="d-flex">
                      <Link to="/contact-us" className="mr-1">
                        <Trans>Click Here</Trans>
                      </Link>

                      <span><Trans>For Support</Trans></span>
                    </div>
                  </address>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="col-12 mb-4">
            <div className="row">
              <div className="col-md-12">
                <iframe
                  height="440"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight="0"
                  marginWidth="0"
                  title="Location Map"
                  style={{ width: "100%" }}
                  src="https://maps.google.com/maps?width=700&amp;height=440&amp;hl=en&amp;q=191-260300%20Writing%20Creek%20Crescent%2C%20Rocky%20View%20County%2C%20Alberta%20T4A%200X8%2C%20Canada+(ZIPCOIN%20REMIT%20HQ%20(D21)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-5">
          <div className="row justify-content-center">
            <Link to="/login" className="btn btn-secondary">
              <Trans>Send Money Now</Trans>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export const query = graphql`
  query ContactUsPageQuery {
    allContactJson {
      edges {
        node {
          icon
          heading
          description
        }
      }
    }

    allSocialJson {
      edges {
        node {
          icon
          title
          link
        }
      }
    }

    allAddressJson {
      edges {
        node {
          icon
          heading
          description
        }
      }
    }
  }
`

export default ContactUsPage
