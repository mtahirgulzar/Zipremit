import React, { useState } from "react"
import { Trans } from "gatsby-plugin-react-i18next"

import SEO from "components/utilities/seo"
import Background from "components/layouts/background"
import TrackForm from "components/forms/track"
import Section from "components/layouts/section"
import Coverage from "components/sections/coverage"

import track from "images/backgrounds/track.jpg"

const TrackPage = () => {
  const [data, setData] = useState({})
  const [error, setError] = useState("")

  const onTrackSuccess = (trackData) => {
    setData(trackData)
  }

  const onTrackError = (trackError) => {
    setError(trackError)
  }

  return (
    <>
      <SEO title="Track" />

      <Background image={track}>
        <div className="row py-5 text-center">
          <div className="col-lg-8 col-md-12 m-auto">
            <h2 className="text-12">
              <Trans>
                Fast. Easy. Secure.
              </Trans>
            </h2>

            <p className="text-4 mb-4">
              <Trans>
                ZipRemit money transfer is a safe way to get more money to your loved ones quickly and easily. And with us, you can track your cash every step of the way to its ultimate destination
              </Trans>
            </p>

            <h5 className="mb-3 mt-5 text-white">
              <Trans>
                Enter the required information below to see if your money is available
              </Trans>
            </h5>

            <TrackForm onTrackSuccess={onTrackSuccess} onTrackError={onTrackError} />
          </div>
        </div>
      </Background>

      {(data.transaction_id || error) && (
        <Section>
          <div className="row">
            <div className="col-md-12 m-auto">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th><Trans>Transaction ID</Trans></th>
                    <th><Trans>Name</Trans></th>
                    <th><Trans>Amount</Trans></th>
                    <th><Trans>Status</Trans></th>
                    <th><Trans>Transaction Date</Trans></th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    {error ? (
                      <td colSpan="5">{error}</td>  
                    ) : data.transaction_id ? (
                      <>
                        <td>{data.transaction_id}</td>
                        <td>{data.name}</td>
                        <td>{data.amount}</td>
                        <td>{data.status}</td>
                        <td>{data.date}</td>
                      </>
                    ) : null}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Section>
      )}

      <Coverage table={true} />
    </>
  )
}

export default TrackPage
