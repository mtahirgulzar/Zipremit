import React from "react"
import { Trans, useTranslation } from "gatsby-plugin-react-i18next"
import { Formik, Form } from "formik"

import { TextInput, EmailInput, TextArea, NumberInput } from "components/utilities/form"

const DonateForm = () => {
  const { t } = useTranslation()

  const initialValues = {}
  
  return (
    <>
      <h3><Trans>Start Donating For A Good Cause</Trans></h3>

      <p>
        <Trans>
          If you've been inspired by what you've read, please use the secure form below to make your contribution to make a difference. We gratefully accept donations of any denomination. Thank you for your generosity.
        </Trans>
      </p>

      <div className="shadow">
        <Formik initialValues={initialValues}>
          {({isSubmitting}) => (
            <Form>
              <div className="form-row">
                <label htmlFor="name" className="col-12"><Trans>Your Name</Trans></label>

                <TextInput name="name" id="name" variant="underline" className="col-sm-6">
                  {t("First name")}
                </TextInput>

                <TextInput name="name" variant="underline" className="col-sm-6">
                  {t("Last name")}
                </TextInput>
              </div>

              <EmailInput name="email" variant="underline" label={t("Email Address")}>
                {t("Your Email")}
              </EmailInput>

              <TextArea name="message" label={t("Comments/Questions")}>
                {t("Your message")}
              </TextArea>

              <NumberInput name="amount" label={t("Donation Amount")}>
                {t("Enter Donation Amount")}
              </NumberInput>

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

export default DonateForm
