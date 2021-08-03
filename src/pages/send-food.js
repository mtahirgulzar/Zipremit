import React from "react"
import { graphql } from "gatsby"
import { Trans } from "gatsby-plugin-react-i18next"

import SEO from "components/utilities/seo"
import Background from "components/layouts/background"
import Section from "components/layouts/section"
import Carousel from "components/utilities/carousel"
import Ratings from "components/utilities/ratings"
import { LOGIN } from "utilities/urls"

import food from "images/backgrounds/food.jpg"

const SendFoodPage = ({ data }) => {
  return (
    <>
      <SEO title="Send Food" />

      <Background image={food} opacity="5" scroll>
        <div className="row py-4 text-center">
          <div className="col-lg-10 col-md-12 m-auto">
            <h1>
              <Trans>
                Hamper Essentials
              </Trans>
            </h1>

            <p className="text-6">
              <Trans>
                Get everything you need to feed your family
              </Trans>
            </p>

            
          </div>
        </div>
      </Background>

      <Section className="bg-light py-3 py-sm-5">
        {data.allFoodJson.edges.map(({ node }, index) => (
          <div className="hamper shadow-sm" key={index}>
            <div className="col-12 col-sm-5 col-md-3 col-lg-2 py-3">
              <Carousel dots={false} items="1">
                {node.images.map(({ image }, index) => (
                  <div key={index}>
                    <img src={image.publicURL} alt="Product" />
                  </div>
                ))}
              </Carousel>
            </div>

            <div className="col-12 col-sm-7 col-md-6 col-lg-7 py-3">
              <h4>
                {node.title}
              </h4>

              <div className="mb-2">
                <span className="text-muted">
                  {node.categories}
                </span>

                {node.reviews && (
                  <span>
                    {node.reviews} Reviews
                  </span>
                )}

                {node.ratings && (
                  <span>
                    <Ratings size={node.ratings} />
                  </span>
                )}
              </div>

              <ul>
                {node.items.map((item, index) => (
                  <li key={index} className="col-6 col-lg-4 col-xl-3">
                    {item.item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-12 col-md-3 py-5 py-md-0">
              <div className="mb-3">
                <div>
                  <span className="font-weight-500">Actual Price:</span>
                  <span className="ml-3">{node.prices.actual} CAD</span>
                </div>

                <div>
                  <span className="font-weight-500">Discount:</span>
                  <span className="text-danger">{node.prices.discount} CAD</span>
                </div>

                <div>
                  <span className="font-weight-500">Total Price:</span>
                  <span className="text-primary">{node.prices.total} CAD</span>
                </div>
              </div>

             <a href={LOGIN} className="btn btn-secondary">
                Buy Now
              </a>
            </div>
          </div>
        ))}
      </Section>
    </>
  )
}

export const query = graphql`
  query SendFoodPageQuery {
    allFoodJson {
      edges {
        node {
          title
          categories
          reviews
          ratings
          prices {
            actual,
            discount,
            total
          }
          images {
            image {
              publicURL
            }
          }
          items {
            item
          }
        }
      }
    }
  }
`

export default SendFoodPage
