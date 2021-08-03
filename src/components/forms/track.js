import React from "react"
import * as Yup from "yup"
import { useTranslation } from "gatsby-plugin-react-i18next"
import { Formik, Form, Field, ErrorMessage } from "formik"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { TRACK } from "utilities/urls"

const TrackForm = ({ onTrackSuccess, onTrackError }) => {
  const { t } = useTranslation()

  const initialValues = {
    id: "",
  }

  const validationSchema = Yup.object({
    id: Yup.string()
    .required(t("Transaction ID is required"))
  })

  const track = (values, setSubmitting) => {
    fetch(TRACK + values.id, {
      method: "GET"
    }).then((response) => {
      setSubmitting(false)

      if (response.ok) {
        return response.json()
      }

      throw new Error("Network Error")
    }).then((response) => {
      if (response.data) {
        onTrackSuccess(response.data)
      } else if (response.status === "error") {
        onTrackError(response.message)
      }
    }).catch((error) => {
      console.log(error)
    })
  }

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={(values, {setSubmitting}) => track(values, setSubmitting)}>
      {({isSubmitting}) => (
        <Form noValidate className="mb-5">
          <div className="track">
            <div className="input-group mb-2">
              <Field type="text" name="id" className="form-control" placeholder="TRANSID" />

              <div className="input-group-append">
                <button type="submit" className="btn btn-secondary" disabled={isSubmitting}>
                  {t("Track Money")}
                  
                  <FontAwesomeIcon icon="arrow-right" className="ml-2" />
                </button>
              </div>
            </div>
          </div>

          <div className="input-error mt-0">
            <ErrorMessage name="id" />
          </div>
        </Form>
      )}
    </Formik>
  )
}

export default TrackForm
