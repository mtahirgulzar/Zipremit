import React from "react"
import { Trans } from "gatsby-plugin-react-i18next"

import SEO from "components/utilities/seo"
import Background from "components/layouts/background"
import Coverage from "components/sections/coverage"

import coverage from "images/backgrounds/coverage.jpg"

const CoverageMapPage = () => {
  return (
    <>
      <SEO title="Coverage Map" />

      <Background image={coverage} opacity="4" scroll>
        <div className="text-center p-5">
          <h2 className="text-11 my-5">
            <Trans>
              Trusted by over 1 million users globally
            </Trans>
          </h2>

          <p className="text-6 line-height-4">
            <Trans>
              Over 20 million transactions via cash pick up, bank, mobile and ZipWallet
            </Trans>
          </p>
        </div>
      </Background>

      <Coverage table={true} />
    </>
  )
}

export default CoverageMapPage
