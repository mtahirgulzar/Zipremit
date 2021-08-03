import React from "react"
import { Trans, useTranslation } from "gatsby-plugin-react-i18next"
import { Formik, Form } from "formik"

import { TextInput, EmailInput, TextArea } from "components/utilities/form"

const VolunteerForm = () => {
  const { t } = useTranslation()

  const initialValues = {}

  return (
    <>
      <h3><Trans>Volunteer</Trans></h3>

      <p>
        <Trans>
          Our volunteers are the backbone of our organization. Their valiant efforts allow us to bring countless smiles to our children.
        </Trans>
      </p>

      <div className="shadow">
        <Formik initialValues={initialValues}>
          {({isSubmitting}) => (
            <Form>
              <TextInput name="name" variant="underline" label={t("Name")}>
                {t("Name")}
              </TextInput>

              <EmailInput name="email" variant="underline" label={t("Email Address")}>
                {t("Your Email")}
              </EmailInput>

              <TextArea name="message" label={t("Comments/Questions")}>
                {t("Your message")}
              </TextArea>

              <div className="d-flex justify-content-end">
                <button type="submit" className="btn btn-secondary">
                  <Trans>Submit</Trans>
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  )
}

export default VolunteerForm
