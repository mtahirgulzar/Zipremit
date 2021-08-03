import React from "react"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import { Trans } from "gatsby-plugin-react-i18next"

import SEO from "components/utilities/seo"
import Background from "components/layouts/background"
import Section from "components/layouts/section"

import news from "images/backgrounds/news.jpg"
import receive from "images/backgrounds/receive.jpg"

const NewsStoriesPage = ({ data }) => {
  return (
    <>
      <SEO title="News/Stories" />

      <Background image={news} opacity="4" scroll>
        <div className="row">
          <div className="col-12 col-lg-7 col-xl-6 text-center">
            <h1 className="text-11 mb-4">
              <Trans>Our successes are really your success</Trans>
            </h1>

            <p className="text-5 line-height-4 mb-4">
              <Trans>
                Learn more on how ZIPREMIT and its communities are engaging, collaborating and working together for a bright future.
              </Trans>
            </p>
          </div>
        </div>
      </Background>

      <Section>
        <div className="row">
          {data.allNewsJson.edges.map(({ node }, index) => (
            <div className="col-lg-4 col-sm-6 mb-4" key={index}>
              <div className="h-100 shadow-sm">
                <Img fluid={node.image.childImageSharp.fluid} />

                <div className="p-3 text-center">
                  <h6>
                    <a href={node.link} target="_blank" rel="noreferrer">
                      {node.title}
                    </a>
                  </h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Background image={receive}>
        <div className="row text-center py-2 py-lg-5">
          <div className="col-lg-8 col-md-10 m-auto text-center">
            <h2><Trans>Media Info</Trans></h2>

            <p className="text-5">
              <Trans>
                For information on ZIPFoundation please contact the foundation at
              </Trans>{" "}

              <a className="text-5" href="mailto:foundation@zipcoinremit.com">
                foundation@zipcoinremit.com
              </a>
            </p>

            <p className="mb-0 text-5">
              <Trans>
                To attend events or enquire about photo opportunities please contact at
              </Trans>{" "}
              
              <a className="text-5" href="mailto:communityevents@zipcoinremit.com">
                communityevents@zipcoinremit.com
              </a>
            </p>
          </div>
        </div>
      </Background>
    </>
  )
}

export const query = graphql`
  query NewsStoriesPageQuery {
    allNewsJson {
      edges {
        node {
          link
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
  }
`

export default NewsStoriesPage
