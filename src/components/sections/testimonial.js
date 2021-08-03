import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Trans } from "gatsby-plugin-react-i18next"

import Section from "components/layouts/section"
import Carousel from "components/utilities/carousel"

const Testimonial = () => {
  const data = useStaticQuery(graphql`
    query TestimonialQuery {
      allTestimonialsJson {
        edges {
          node {
            name
            message
            description
          }
        }
      }
    }
  `)

  return (
    <Section className="bg-white">
      <h2 className="text-9 text-center">
        <Trans>
          What Our Customers Say
        </Trans>
      </h2>

      <p className="text-4 text-center mb-4">
        <Trans>
          A fast and easy money transfer experience people love to talk about
        </Trans>
      </p>

      <Carousel margin={10} slideBy={2} responsive={{0: {items: 1}, 768: {items: 2}}}>
        {data.allTestimonialsJson.edges.map(({ node }, index) => (
          <div className="testimonial" key={index}>
            <blockquote className="text-4 line-height-5">
              <Trans>{node.message}</Trans>
            </blockquote>

            <strong className="d-block font-weight-500">
              {node.name}
            </strong>

            <span className="text-muted">
              {node.description}
            </span>
          </div>
        ))}
      </Carousel>

      <div className="embed-responsive embed-responsive-16by9 mt-5">
        <iframe title="ZipCoin Remiy Testimonials" className="embed-responsive-item" src="https://www.youtube.com/embed/uyoWd-34NDM?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0" />
      </div>
    </Section>
  )
}

export default Testimonial
