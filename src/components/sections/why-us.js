import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Trans } from "gatsby-plugin-react-i18next"

import Section from "components/layouts/section"
import Feature from "components/layouts/feature"

const WhyUs = () => {
  const data = useStaticQuery(graphql`
    query WhyUsQuery {
      allWhyUsJson {
        edges {
          node {
            icon
            heading
            description
          }
        }
      }
    } 
  `)

  return (
    <Section>
      <h2 className="text-9 text-center font-weight-400">
        <Trans>
          Why Choose Us?
        </Trans>
      </h2>

      <p className="text-4 text-center font-weight-300 mb-5">
        <Trans>
          Here's Top 6 reasons why using a ZipRemit account for <span className="text-primary">managing</span> your money.
        </Trans>
      </p>
      
      <div className="row">
        <div className="col-lg-10 mx-auto">
          <div className="row">
            {data.allWhyUsJson.edges.map(({ node }, index) => (
              <div className="col-12 col-md-6 mb-4" key={index}>
                <Feature icon={node.icon} boxStyle="2">
                  <h3 className="font-weight-400">
                    <Trans>
                      {node.heading}
                    </Trans>
                  </h3>

                  <p>
                    <Trans>
                      {node.description}
                    </Trans>
                  </p>
                </Feature>
              </div>
            ))}
          </div>
        </div>
      </div>

      <p className="text-4 text-center font-weight-300">
        <Trans>
          You work hard for your money and we want you to get the most for your buck. Get started now.
        </Trans>
      </p>
    </Section>
  )
}

export default WhyUs
