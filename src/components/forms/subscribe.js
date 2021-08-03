import React, { useState } from "react"
import * as Yup from "yup"
import { Trans, useTranslation } from "gatsby-plugin-react-i18next"
import { Formik, Form, Field, ErrorMessage } from "formik"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { SUBSCRIPTION } from "utilities/urls"

const SubscribeForm = () => {
  const { t } = useTranslation()

  const [subscription, setSubscription] = useState({ status: "", message: "" })

  const initialValues = {
    email: ""
  }
  
  const validationSchema = Yup.object({
    email: Yup.string()
    .required(t("Email is required"))
    .email(t("Enter valid email"))
  })

  const subscribe = (values, setSubmitting) => {
    var data = new FormData()
    data.append("email", values.email)

    fetch(SUBSCRIPTION, {
      method: "POST",
      body: data
    }).then(response => {
      setSubmitting(false)

      if (response.ok) {
        return response.json()
      }

      throw new Error("Network Error")
    }).then(response => {
      setSubscription({
        status: "success",
        message: response.message
      })
    }).catch(error => {
      setSubscription({
        status: "danger",
        message: error.message
      })
    })
  }

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={(values, {setSubmitting}) => {subscribe(values, setSubmitting)}}>
      {({isSubmitting}) => (
        <Form noValidate>
          <h4 className="text-3 text-muted text-uppercase font-weight-400 mb-3">
            <Trans>
              Subscribe
            </Trans>
          </h4>

          <p>
            <Trans>
              Subscribe to receive latest news and updates
            </Trans>
          </p>

          <div className="input-group newsletter">
            <Field type="email" name="email" className="form-control" placeholder={t("Your Email Address")} />

            <span className="input-group-append">
              <button type="submit" className="btn" disabled={isSubmitting}>
                <FontAwesomeIcon icon="paper-plane" color="white" />
              </button>
            </span>
          </div>

          <div className="input-error">
            <ErrorMessage name="email" className="input-error" />
          </div>

          {subscription.status && (
            <div className={`alert alert-${subscription.status}`} role="alert">
              {subscription.message}
            </div>
          )}
        </Form>
      )}
    </Formik>
  )
}

export default SubscribeForm
