import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { useTranslation } from "gatsby-plugin-react-i18next"

import Section from "components/layouts/section"
import Feature from "components/layouts/feature"

const Stats = () => {
  const { t } = useTranslation()

  const data = useStaticQuery(graphql`
    query StatsQuery {
      allStatsJson {
        edges {
          node {
            icon
            title
            stat
          }
        }
      }
    }
  `)

  return (
    <Section className="bg-primary pt-5 pb-2">
      <div className="row py-2">
        {data.allStatsJson.edges.map((item, index) => (
          <div className="col-sm-6 col-md-3 mb-4" key={index}>
            <Feature icon={item.node.icon} boxStyle="1" color="secondary">
              <h4 className="text-12 mb-0">
                {item.node.stat}
              </h4>
                  
              <p className="text-4 mb-0">
                {t(item.node.title)}
              </p>
            </Feature>
          </div>
        ))}
      </div>
    </Section>
  )
}

export default Stats
