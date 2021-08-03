import React from "react"
import { Trans, useTranslation } from "gatsby-plugin-react-i18next"
import { Formik, Form } from "formik"

import { TextInput, EmailInput, TextArea } from "components/utilities/form"

const FundraiserForm = () => {
  const { t } = useTranslation()

  const initialValues = {}

  return (
    <div className="row">
      <div className="col-lg-6">
        <h3><Trans>Plan A Fundraiser</Trans></h3>

        <p>
          <Trans>
            We invite you to support ZIP FOUNDATION by planning a fundraiser of your own. We have a list of fundraising ideas below but welcome any ideas that you may have.
          </Trans>
        </p>

        <p><Trans>Some popular fundraising events are as follows:</Trans></p>

        <ol>
          <li className="mb-2 font-weight-bold"><Trans>Lemonade Stand</Trans></li>
          <li className="mb-2 font-weight-bold"><Trans>Sports Tournaments</Trans></li>
          <li className="mb-2 font-weight-bold"><Trans>Car Wash</Trans></li>
          <li className="mb-2 font-weight-bold"><Trans>Bake Sale</Trans></li>
          <li className="mb-2 font-weight-bold"><Trans>Garage Sale / Yard Sale Gala Dinners</Trans></li>
          <li className="mb-2 font-weight-bold"><Trans>Walk-A-Thons</Trans></li>
          <li className="mb-2 font-weight-bold"><Trans>Golf Tournaments</Trans></li>
          <li className="mb-2 font-weight-bold"><Trans>BBQ Party</Trans></li>
          <li className="mb-2 font-weight-bold"><Trans>Pizza Lunches</Trans></li>
          <li className="mb-2 font-weight-bold"><Trans>Casual Days</Trans></li>
          <li className="mb-2 font-weight-bold"><Trans>Customer Appreciation Days</Trans></li>
        </ol>
      </div>

      <div className="col-lg-6">
        <p>
          <Trans>
            If you would like to plan a fundraiser and contribute the proceeds to ZIP FOUNDATION, please fill out the email form below and we will be in touch to discuss your idea and provide the required documents. We will even help you promote your event via our web site and social media spaces. Fundraising events held on behalf of ZIP FOUNDATION must be approved by a member of our executive team.
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
      </div>
    </div>
  )
}

export default FundraiserForm
