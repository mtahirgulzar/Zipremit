import React from "react"
import { graphql } from "gatsby"
import { Trans } from "gatsby-plugin-react-i18next"

import SEO from "components/utilities/seo"
import Background from "components/layouts/background"
import Section from "components/layouts/section"

import wallet from "images/backgrounds/wallet.jpg"
import digital from "images/wallet/digital.png"
import wallets from "images/wallet/wallets.png"
import features from "images/wallet/features.jpg"

const WalletPage = ({ data }) => {
  return (
    <>
      <SEO title="Fund ZipWallet" />

      <Background image={wallet} opacity="5">
        <div>
          <h2 className="text-11 font-weight-500 mb-4">Zip Wallet</h2>

          <p className="text-5 line-hight-4 mb-4">
            <Trans>
              This is our electronic wallet, which is used for transactions made
              online. Its utility is same as a credit or debit card. Zip
              Wallet is linked with the individual's bank account to make
              payments.
            </Trans>
          </p>

          <p className="text-7 line-hight-4">
            <Trans>Go with the flow, Go with ZIP Wallet</Trans>
          </p>
        </div>
      </Background>

      <Section className="bg-white">
        <div className="row align-items-center">
          <div className="col-lg-6 d-flex">
            <div className="px-0 px-lg-5 my-auto">
              <p className="text-4">
                <Trans>
                  Zip Wallet is the cheapest and most economical way to send
                  money to family. Should something happens with your wallet
                  money we have you covered; we’ve developed a 100% money
                  guarantee policy to ensure you the customer have protection
                  and a piece of mind. So move money to your ZIPREMIT today
                  FREE, EASY and you’ve nothing to lose.
                </Trans>
              </p>

              <p className="text-4 mb-5 mb-lg-0">
                <Trans>
                  Zip Wallet makes online send money easier and faster than ever
                  before. Start smiling and sending the ZIPREMIT way.
                </Trans>
              </p>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="row justify-content-center">
              <div className="col-6 col-lg-8 mt-lg-n5 mb-4 mb-lg-0">
                <img src={digital} className="img-fluid" alt="Digital Wallet" />
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="row align-items-center">
          <div className="col-12 col-lg-7 order-lg-2">
            <h2 className="text-7 mb-3">
              <Trans>Types of</Trans> <span>ZIP WALLETS</span>
            </h2>

            <ol className="text-4">
              {data.allWalletsJson.edges.map(({ node }, index) => (
                <li key={index} className="mb-3">
                  {node.type} - <Trans>{node.description}</Trans>
                </li>
              ))}
            </ol>
          </div>

          <div className="col-12 col-lg-5 order-lg-1 mt-4 mt-lg-0">
            <img src={wallets} className="img-fluid" alt="Wallets" />
          </div>
        </div>
      </Section>

      <Section className="bg-offwhite">
        <div className="row">
          <div className="col-12">
            <h2 className="text-7">
              <Trans> Quick Ways To Fund Zip Wallet</Trans>
            </h2>

            <ol className="text-4 mb-0">
              <li className="mb-2">
                <Trans>Email Payment</Trans>
              </li>
              <li className="mb-2">
                INTERAC <Trans>Online</Trans>
              </li>
              <li className="mb-2">
                <Trans>Debit/Credit Card</Trans>
              </li>
              <li>
                <Trans>Bank Deposit</Trans>
              </li>
            </ol>
          </div>

          <div className="col-12">
            <img src={features} className="img-fluid my-4" alt="Fund Wallet" />
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <h2>
              <Trans>Wallet Features At A Glance</Trans>
            </h2>

            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>
                    <Trans>Feature</Trans>
                  </th>
                  <th>
                    <Trans>Highlights</Trans>
                  </th>
                </tr>
              </thead>

              <tbody>
                {data.allWalletFeaturesJson.edges.map(({ node }, index) => (
                  <tr key={index}>
                    <td>
                      <Trans>{node.feature}</Trans>
                    </td>

                    <td>
                      <Trans>{node.highlight}</Trans>
                      {node.extra && (
                        <>
                          <br />
                          <br />
                          <Trans>{node.extra}</Trans>
                        </>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Section>
    </>
  )
}

export const query = graphql`
  query WalletPageQuery {
    allWalletsJson {
      edges {
        node {
          type
          description
        }
      }
    }

    allWalletFeaturesJson {
      edges {
        node {
          feature
          highlight
          extra
        }
      }
    }
  }
`

export default WalletPage
