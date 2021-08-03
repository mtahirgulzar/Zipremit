import React from "react"
import { Trans, useTranslation } from "gatsby-plugin-react-i18next"
import { Formik, Form } from "formik"

import { TextInput, EmailInput, TextArea } from "components/utilities/form"

const PartnerForm = () => {
  const { t } = useTranslation()

  const initialValues = {}
  
  return (
    <>
      <h3><Trans>Be A Partner</Trans></h3>

      <p>
        <Trans>
          ZIP FOUNDATION operates as a non-profit organization. We receive support from companies and groups that contribute to our cause simply because they believe in what we do. Financial contributions and gifts from our sponsors allow us to build more playgrounds, plan more events and give out more Holiday Bears/toys to our special ZIP FOUNDATION children. We are indebted to our sponsors and they are, without a doubt, true survivors! Since we are a volunteer organization, 100% of all contributions go directly to ZIP FOUNDATION initiatives.
        </Trans>
      </p>

      <p>
        <Trans>
          If you would like to become a ZIP FOUNDATION sponsor, fill out the email form below and let us know how you would like to help. We will do whatever we can to make sure you know that the ZIP FOUNDATION community appreciates your contribution.
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

export default PartnerForm
