import React, { useState, useEffect } from "react"
import * as Yup from "yup"
import { useTranslation } from "gatsby-plugin-react-i18next"
import { Formik, Form } from "formik"

import {
  FieldSet,
  RadioButton,
  TextArea,
  TextInput,
  EmailInput,
  CheckBox,
  Select,
  DateInput
} from "components/utilities/form"

import { BENEFICIARIES, CONTACT_US } from "utilities/urls"

const ContactUsForm = () => {
  const { t } = useTranslation()

  const [status, setStatus] = useState()
  const [existingCase, setExistingCase] = useState(false)
  const [beneficiaries, setBeneficiaries] = useState([])

  useEffect(() => {
    fetch(BENEFICIARIES).then(response => {
      if (response.ok) {
        return response.json()
      }

      throw new Error("Network Error")
    }).then(response => {
      setBeneficiaries(response)
    }).catch(error => {
      console.log(error.message)
    })
  }, [])

  const initialValues = {
    department: "General Question and Feedback",
    message: "",
    first_name: "",
    last_name: "",
    email: "",
    no_email: "",
    service_type: "Money Transfer",
    transaction_reference_number: "",
    send_date: "",
    send_currency: "CAD",
    receive_country: "BDT",
    existing_case: ""
  }

  const validationSchema = Yup.object({
    department: Yup.string()
    .required(),
    message: Yup.string()
    .required(),
    first_name: Yup.string()
    .required(),
    last_name: Yup.string()
    .required(),
    email: Yup.string()
    .required(),
    service_type: Yup.string()
    .required(),
    send_date: Yup.date()
    .required(),
    send_currency: Yup.string()
    .required(),
    receive_country: Yup.string()
    .required()
  })

  const submit = (values, setSubmitting) => {
    var data = new FormData()

    data.append('department', values.department)
    data.append('message', values.message)
    data.append('first_name', values.first_name)
    data.append('last_name', values.last_name)
    data.append('email', values.email)
    data.append('no_email', values.no_email)
    data.append('service_type', values.service_type)
    data.append('transaction_reference_number', values.transaction_reference_number)
    data.append('send_date', values.send_date)
    data.append('send_currency', values.send_currency)
    data.append('receive_country', values.receive_country)
    data.append('existing_case', values.existing_case)

    fetch(CONTACT_US, {
      method: "POST",
      headers: {
        "Accept": "application/json",
      },
      body: data
    }).then(response => {
      setSubmitting(false)

      if (response.ok) {
        return response.json()
      }

      throw new Error("Network Error")
    }).then(response => {
      setStatus(response.status)
    }).catch(error => {
      console.log(error)
    })
  }

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={(values, {setSubmitting}) => submit(values, setSubmitting)}>
      {({ isSubmitting }) => (
        <Form>
          <FieldSet legend={t("What we can help you with?")}>
            <RadioButton name="department" value="General Question and Feedback">
              {t("General Question & Feedback")}
            </RadioButton>

            <RadioButton name="department" value="Complaint">
              {t("Complaint")}
            </RadioButton>

            <RadioButton name="department" value="Report Fraud">
              {t("Report Fraud")}
            </RadioButton>

            <TextArea name="message" rows="3" label={t("Comments")} variant="underline">
              {t("Your message")}
            </TextArea>
          </FieldSet>
          
          <FieldSet legend={t("Contact Information")}>
            <div className="form-row">
              <TextInput name="first_name" className="col-sm-6" label={t("Legal First Name")} variant="underline" />

              <TextInput name="last_name" className="col-sm-6" label={t("Legal Last Name")} variant="underline" />
            </div>

            <EmailInput name="email" label={t("Email address")} variant="underline" />

            <CheckBox name="no_email">
              {t("I do not have an email address")}
            </CheckBox>
          </FieldSet>

          <FieldSet legend={t("Additional Information")}>
            <Select label={t("Service Type")} name="service_type" variant="underline">
              <option value="Money Transfer">{t("Money Transfer")}</option>
              <option value="Buy Food">{t("Buy Food")}</option>
              <option value="API Packages">{t("API Packages")}</option>
              <option value="Compliance Packages">{t("Compliance Packages")}</option>
              <option value="Airtime Recharge">{t("AirTime Recharge")}</option>
              <option value="ZipCash e-Wallet">{t("ZIPCASH e-Wallet")}</option>
            </Select>

            <div className="form-row align-items-end">
              <TextInput label={t("Transaction Reference Number (Optional)")} name="transaction_reference_number" className="col-sm-6" variant="underline" />

              <DateInput label={t("Send Date")} name="send_date" className="col-sm-6" variant="underline" />
            </div>

            <div className="form-row">
              <Select label={t("Send Currency")} name="send_currency" className="col-sm-6" variant="underline">
                <option value="CAD">CAD</option>
                <option value="USD">USD</option>
                <option value="GBP">GBP</option>
                <option value="EUR">EUR</option>
                <option value="ZAR">ZAR</option>
              </Select>

              <Select label={t("Receive Country")} name="receive_country" className="col-sm-6" variant="underline">
                {beneficiaries.map((item, index) => (
                  <option key={index} value={item.currency_code}>
                    {item.name}
                  </option>
                ))}
              </Select>
            </div>

            <div className="form-check mb-3">
              <label className="form-check-label">
                <input type="checkbox" className="form-check-input" value={existingCase} onChange={(e) => setExistingCase(e.target.checked)} />
                {t("I have an existing case number")}
              </label>
            </div>

            {existingCase && (
              <TextInput label={t("Existing Case Number")} name="existing_case" variant="underline" />
            )}
          </FieldSet>
                    
          <button type="submit" className="btn btn-secondary" disabled={isSubmitting}>
            {t("Submit")}
          </button>

          {status && (
            <div className="alert alert-info mt-3">{status}</div>
          )}
        </Form>
      )}
    </Formik>
  )
}

export default ContactUsForm
