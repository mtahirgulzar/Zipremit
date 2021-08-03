import React from "react"
import { Trans, useTranslation } from "gatsby-plugin-react-i18next"
import { Formik, Form } from "formik"

import { TextInput, EmailInput, TextArea } from "components/utilities/form"

const ReferForm = () => {
  const { t } = useTranslation()

  const initialValues = {}
  
  return (
    <>
      <h3><Trans>Refer A Child</Trans></h3>

      <p>
        <Trans>
          ZIP FOUNDATION invites you to refer a child to our program. If you know of a child that is suffering from an illness and believe the family would like our support, or if you are a family member requesting support, please fill out the Email form below and we will send you our eligibility requirements and referral questionnaire.
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

export default ReferForm
