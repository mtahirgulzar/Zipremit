import React from "react"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import { Link, Trans } from "gatsby-plugin-react-i18next"

import SEO from "components/utilities/seo"
import Background from "components/layouts/background"
import Youtube from "components/utilities/youtube"
import Section from "components/layouts/section"
import Feature from "components/layouts/feature"
import Coverage from "components/sections/coverage"

import receive from "images/backgrounds/receive.jpg"

const ReceivePage = ({ data }) => {
  return (
    <>
      <SEO title="Receive Money" />

      <Background image={receive}>
        <div className="py-2 py-lg-5 text-center">
          <h2 className="text-14">
            <Trans>Receive Money From Abroad Fast, Securely &amp; Instantly</Trans>
          </h2>

          <p className="text-5 mb-4">
            <Trans>
              You want to receive money in a way that suits you and with ZipRemit you can receive cash from anyone directly into your ZipWallet, cash pick up, bank account, airtime topup, online groceries and mobile wallet
            </Trans>
          </p>
          
          <p className="text-5 mb-4 text-uppercase">
            <Trans>Open a Free ZipCash Wallet Today.</Trans>
          </p>
          
          <a className="btn btn-secondary m-2" href="#coverage-map">
            <Trans>Coverage Map</Trans>
          </a>
            
          <Youtube embed="daip7ZSMkUM">See How It Works</Youtube>

          <Link to="/track" className="btn btn-secondary m-2">
            <Trans>Track Money</Trans>
          </Link>
        </div>
      </Background>

      <Section className="bg-offwhite">
        <div className="row">
          <div className="col-lg-8 col-md-10 m-auto">
            <div className="section-heading">
              <h2 className="section-title">
                <Trans>
                  Our Payment Methods
                </Trans>
              </h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12 col-lg-10 m-auto">
            <h5 className="text-center text-uppercase mb-5">
              <Trans>Ways to Receive</Trans>
            </h5>

            <div className="row">
              {data.allReceiveJson.edges.map(({ node }, index) => (
                <div className="col-sm-6 col-md-4 mb-4" key={index}>
                  <Feature icon={node.icon} boxStyle="3">
                    <h3><Trans>{node.method}</Trans></h3>
                  </Feature>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12 col-lg-10 m-auto">
            <div className="embed-responsive embed-responsive-16by9 mt-5">
              <iframe title="ZipCoin Remit" className="embed-responsive-item" src="https://www.youtube.com/embed/Bzz9B291uq8?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0" />
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="row">
          <div className="col-lg-8 col-md-10 m-auto">
            <div className="section-heading">
              <h2 className="section-title">
                <Trans>Tips For Picking Up Cash</Trans>
              </h2>
                
              <p className="text-3 mt-3">
                <Trans>
                  Knowing your money is secure during a transfer is important. But if your transfer will be picked up at a Cash pick up location, it’s just as vital that you’re safe when retrieving your cash. No matter where you are in the world, exercise caution with our safety tips:
                </Trans>
              </p>
            </div>
          </div>
        </div>
          
        <div className="row">
          {data.allPickupJson.edges.map(({ node }, index) => (
            <div className="col-md-6 d-flex mb-2" key={index}>
              <div className="mr-4">
                <Img fixed={node.image.childImageSharp.fixed} />
              </div>
              
              <div>
                <h6 className="text-primary"><Trans>{node.heading}</Trans></h6>
                <p><Trans>{node.description}</Trans></p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Coverage table={true} id="coverage-map" />
    </>
  )
}

export const query = graphql`
  query ReceivePageQuery {
    allReceiveJson {
      edges {
        node {
          icon
          method
        }
      }
    }

    allPickupJson {
      edges {
        node {
          heading
          description
          image {
            childImageSharp {
              fixed (width: 70, height: 70) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  }
`

export default ReceivePage
