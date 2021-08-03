import React, { useEffect, useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Trans, useTranslation } from "gatsby-plugin-react-i18next"
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import Select from "components/utilities/select"
//import ToolTip from "components/utilities/tooltip"

import { BENEFICIARIES, CALCULATOR, BASE_URL } from "utilities/urls"

//import cards from "images/others/card.png"

const SendMoneyForm = () => {
  const { t } = useTranslation()

  const data = useStaticQuery(graphql`
    query SendMoneyFormQuery {
      allCurrenciesJson {
        edges {
          node {
            currency
            text
            subtext
            methods {
              title
              method
            }
          }
        }
      }
    }
  `)

  const [send, setSend] = useState(100)
  const [get, setGet] = useState(429.67)
  const [context, setContext] = useState("standard")
  const [currency, setCurrency] = useState("cad")
  const [includeFees, setIncludeFees] = useState(false)
  const [beneficiary, setBeneficiary] = useState("GHS")
  const [beneficiaries, setBeneficiaries] = useState([])
  const [method, setMethod] = useState("email")
  const [methods, setMethods] = useState([])
  const [alpha3, setAlpha3] = useState("GHA")
  const [calculation, setCalculation] = useState({})
  const [promo, setPromo] = useState("")
  const flagArray = ["ae", "au", "za", "in", "gb"]
  //const c = useState("")

  const onSendChange = value => {
    setSend(value)
    setContext("standard")
  }

  const onGetChange = value => {
    setGet(value)
    setContext("reverse")
  }

  const onBeneficiaryChange = target => {
    setBeneficiary(target.value)

    setAlpha3(target[target.selectedIndex].getAttribute("data-alpha3"))
  }

  useEffect(() => {
    const selectedCurrency = data.allCurrenciesJson.edges.filter(
      ({ node }) => node.currency === currency
    )

    setMethods(selectedCurrency[0].node.methods)
  }, [currency])
  useEffect(() => {
    fetch(BENEFICIARIES)
      .then(response => {
        if (response.ok) {
          return response.json()
        }

        throw new Error("Network Error")
      })
      .then(response => {
        setBeneficiaries(response)
      })
      .catch(error => {
        console.log(error.message)
      })
  }, [])

  useEffect(() => {
    var endpoint = `
      sourceCurrency=${currency}&
      targetCurrency=${beneficiary}&
      paymentMethod=${method}&
      alpha3=${alpha3}&
      context=${context}&
      sourceAmount=${send}&
    `

    if (context === "reverse") {
      endpoint += `recipientGets=${get}`
    }

    if (includeFees) {
      endpoint += "&includeFee=yes"
    }

    if (promo) {
      endpoint += `&promoCode=${promo}`
    }

    fetch(CALCULATOR + endpoint)
      .then(response => {
        if (response.ok) {
          return response.json()
        }

        throw new Error("Network Error")
      })
      .then(response => {
        const data = response.data
        setCalculation(data)

        if (context === "standard") {
          setGet(data.benificiary_amount)
        }

        if (context === "reverse") {
          setSend(data.sourceAmount)
        }
      })
      .catch(error => {
        console.log(error.message)
      })
  }, [send, get, currency, includeFees, beneficiary, method, promo])

  return (
    <form method="GET" action={BASE_URL + "consumer_send_money"}>
      <input
        className="d-none"
        name="context"
        type="text"
        defaultValue="landing_page"
      />

      <input
        className="d-none"
        name="hash"
        type="text"
        defaultValue={calculation.hash}
      />

      <div className="col-12 mx-auto">
        <div className="form-group">
          <label htmlFor="youSend">
            <Trans>You Send</Trans>
          </label>

          <div className="input-group mb-0">
            <input
              type="number"
              id="youSend"
              name="youSend"
              className="form-control"
              value={send}
              onChange={e => onSendChange(e.target.value)}
              required
            />

            <div className="input-group-append">
              <span className="input-group-text">
                <Select
                  name="youSendCurrency"
                  search={true}
                  value={currency}
                  onChange={e => setCurrency(e.target.value)}
                  required
                >
                  {data.allCurrenciesJson.edges.map(({ node }, index) => (
                    <option
                      key={index}
                      value={node.currency}
                      data-icon={`currency-flag currency-flag-${node.currency}`}
                      data-subtext={node.subtext}
                    >
                      {node.text}
                    </option>
                  ))}
                </Select>
              </span>
            </div>
          </div>
        </div>

        <div className="form-row mx-2 mt-4 mb-3">
          <div className="d-flex align-items-end">
            <div className="form-check">
              <input
                type="checkbox"
                name="include_fee"
                className="form-check-input"
                checked={includeFees}
                onChange={e => setIncludeFees(e.target.checked)}
              />

              <label htmlFor="includeFee" className="font-weight-700 mb-0">
                <Trans>Include Fees</Trans>
              </label>
            </div>
          </div>

          <span style={{ flex: "1 1 auto" }}></span>

          <div>
            <Trans>Conversion Fx Rate:</Trans>{" "}
            <span
              style={{ color: "#FF8400", fontSize: "27px", fontWeight: "500" }}
            >
              {calculation.our_rate}
            </span>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="recipientGets">
            <Trans>Beneficiary Gets</Trans>
          </label>

          <div className="input-group mb-0">
            <input
              type="number"
              id="recipientGets"
              name="recipientGets"
              className="form-control"
              value={get}
              onChange={e => onGetChange(e.target.value)}
            />

            <div className="input-group-append">
              <span className="input-group-text">
                <Select
                  name="recipientCurrency"
                  search={true}
                  value={beneficiary.subtext}
                  onChange={e => onBeneficiaryChange(e.target)}
                  required
                >
                  {beneficiaries.map((item, index) => (
                    <option
                      key={index}
                      data-subtext={item.name}
                      value={item.currency_code}
                      data-icon={`currency-flag currency-flag-${
                        flagArray.indexOf(item.country_code.toLowerCase()) > -1
                          ? item.currency_code.toLowerCase()
                          : item.country_code.toLowerCase()
                      }`}
                      data-alpha3={item.alpha_3}
                    >
                      {item.currency_code}
                    </option>
                  ))}
                </Select>
              </span>
            </div>
          </div>
        </div>

        <ul className="timeline mt-4">
          <li>
            <p>
              <Trans>Our Fees</Trans>: <span>{calculation.standard_fees}</span>
              <span className="text-uppercase">
                {calculation.sourceCurrency}
              </span>
            </p>
          </li>

          <li>
            <p>
              <Trans>Fee</Trans>:{" "}
              <span>{calculation.processing_fees_show}</span>{" "}
              <span>{calculation.processing_fee_currency}</span>
              <span className="ml-3">
                <select
                  name="paymentMethod"
                  value={method}
                  onChange={e => setMethod(e.target.value)}
                  required
                >
                  {methods.map((item, index) => (
                    <option key={index} value={item.method}>
                      {t(item.title)}
                    </option>
                  ))}
                </select>
              </span>
            </p>
          </li>

          <li className="d-flex">
            <p style={{ color: "#4CAF50" }}>
              <Trans>Promo Code:</Trans>
            </p>

            <div className="ml-3">
              <input
                type="text"
                name="promoCode"
                value={promo}
                onChange={e => setPromo(e.target.value)}
              />

              {calculation.promoMessage && (
                <p className="text-info mb-0 mt-2">
                  {calculation.promoMessage}
                </p>
              )}
            </div>
          </li>

          <li>
            <p>
              <Trans>Total Fees</Trans>:{" "}
              <span>{calculation.total_fees_in_source_currency}</span>{" "}
              <span className="text-uppercase">
                {calculation.sourceCurrency}
              </span>
            </p>
          </li>

          <li>
            <p>
              <Trans>Amount to be charged</Trans>:{" "}
              <span>{calculation.chargeAmount}</span>{" "}
              <span className="text-uppercase">
                {calculation.sourceCurrency}
              </span>
            </p>
          </li>
        </ul>
      </div>

      <button type="submit" className="btn btn-secondary btn-block">
        <Trans>Continue</Trans>
      </button>
    </form>
  )
}

export default SendMoneyForm
