import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Link, Trans, useTranslation } from "gatsby-plugin-react-i18next"

import * as am4Core from "@amcharts/amcharts4/core"
import * as am4Maps from "@amcharts/amcharts4/maps"
import worldMap from "@amcharts/amcharts4-geodata/worldLow"
import { REGISTER } from "utilities/urls"

const Coverage = ({ table, ...props }) => {
  const { t } = useTranslation()

  const data = useStaticQuery(graphql`
    query CoverageQuery {
      allCoverageJson {
        nodes {
          id
          country
          mobile
          bank
          zipwallet
          agent
          pickup
        }
      }
    }
  `)

  const coverage = data.allCoverageJson.nodes.map(item =>
    Object.assign(item, {
      fill: am4Core.color("#dba84e"),
    })
  )

  const tooltip = `
    <div class='coverage-tooltip'>
      <div><span>${t("Country")} : </span><span>{name}</span></div>
      <div><span>${t("Mobile Transfers")}</span> : {mobile}</div>
      <div><span>${t("Bank Deposits")}</span> : {bank}</div>
      <div><span>ZipWallet</span> : {zipwallet}</div>
      <div><span>${t("Agent")}</span> : {agent}</div>
      <div><span>${t("Cash Pickups")}</span> : {pickup}</div>
    </div>
  `

  const countries = data.allCoverageJson.nodes.map(item => item.id)

  useEffect(() => {
    // create map instance
    let map = am4Core.create("map", am4Maps.MapChart)

    // set map definition
    map.geodata = worldMap

    // set projection
    map.projection = new am4Maps.projections.Miller()

    // create coverage countries series
    let covered = map.series.push(new am4Maps.MapPolygonSeries())

    // make map load polygon (like country names) data from GeoJSON
    covered.useGeodata = true

    // include covered countries
    covered.include = countries

    // configure series
    let template = covered.mapPolygons.template
    template.tooltipHTML = tooltip

    // create hover state and set alternative fill color
    let hover = template.states.create("hover")
    hover.properties.fill = am4Core.color("#c88c39")

    // add data to series
    covered.data = [...coverage]

    // bind "fill" property to "fill" key in data
    template.propertyFields.fill = "fill"

    // create non coverage countries series
    let noncovered = map.series.push(new am4Maps.MapPolygonSeries())

    // make map load polygon (like country names) data from GeoJSON
    noncovered.useGeodata = true

    // exclude covered countries
    noncovered.exclude = countries

    // set background
    map.backgroundSeries.mapPolygons.template.polygon.fill = am4Core.color(
      "#aadaff"
    )
    map.backgroundSeries.mapPolygons.template.polygon.fillOpacity = 1

    // add zoom controls
    map.zoomControl = new am4Maps.ZoomControl()

    // set initial zoom level
    map.homeZoomLevel = 3

    // set initial GeoPoints
    map.homeGeoPoint = {
      latitude: 10,
      longitude: 35,
    }

    // dispose map after being done with it
    return () => {
      map.dispose()
    }
  })

  return (
    <section className="section coverage bg-offwhite" {...props}>
      <div className="container">
        <div className="row">
          <div className="col-lg-10 col-md-10 m-auto">
            <div className="section-heading" id="coverageMap">
              <h2 className="section-title">
                <Trans>Our Coverage Map</Trans>
              </h2>

              <p className="text-4 mt-4">
                <Trans>
                  Our service opened up a world of options and possibilities
                  beyond your local bank or corner financial stores — options
                  that typically come with convenience, competitive exchange
                  rates, low or no fees and flexible ways to receive hard cash
                  in minutes.
                </Trans>
              </p>

              <Link to={REGISTER} className="btn btn-secondary">
                <Trans>Send Money Now</Trans>
              </Link>
            </div>
          </div>
        </div>

        {table && (
          <div className="row mb-5">
            <div className="col-12 m-auto">
              <div className="coverage-table">
                <table className="table table-bordered table-striped nowrap">
                  <thead>
                    <tr>
                      <th>
                        <Trans>Country</Trans>
                      </th>
                      <th>
                        ZipWallet <br />
                        <small>ZIPCASH, CAD, USD, GBP, EUR, ZAR, ZIPALL</small>
                      </th>
                      <th>
                        <Trans>Mobile Money</Trans>
                      </th>
                      <th>
                        <Trans>Bank</Trans>
                      </th>
                      <th>
                        <Trans>Cash Pickup</Trans>
                      </th>
                      <th>
                        <Trans>Agent</Trans>
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {data.allCoverageJson.nodes.map((node, index) => (
                      <tr key={index}>
                        <td>{node.country}</td>
                        <td>
                          <Trans>{node.zipwallet}</Trans>
                        </td>
                        <td>{node.mobile === "None" ? "" : node.mobile}</td>
                        <td>{node.bank === "None" ? "" : node.bank}</td>
                        <td>{node.bank === "None" ? "" : node.bank}</td>
                        <td>{node.agent === "None" ? "" : node.agent}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>

      <div id="map" />
    </section>
  )
}

Coverage.defaultProps = {
  table: false,
}

Coverage.propTypes = {
  table: PropTypes.bool,
}

export default Coverage
