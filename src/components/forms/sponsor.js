import React from "react"
import { Trans, useTranslation } from "gatsby-plugin-react-i18next"
import { Formik, Form } from "formik"

import { TextInput, EmailInput, TextArea } from "components/utilities/form"

const SponsorForm = () => {
  const { t } = useTranslation()

  const initialValues = {}

  return (
    <>
      <h3><Trans>Sponsor A Bear/Toy</Trans></h3>

      <p>
        <Trans>
          A teddy bear or toy is guaranteed to bring a smile to any child’s face but imagine the smile a 2-foot tall bear would bring! Each year over 250 sponsors and volunteers take time out during the busy holiday season to deliver cuddly 2-foot tall teddy bears – each with a $100 gift card – to children in the Greater Calgary Area and surrounding cities. The cost to sponsor a bear is $100, which includes the teddy bear/toy. Siblings of each child, up to the age of 18, will also receive a special gift.
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

export default SponsorForm
