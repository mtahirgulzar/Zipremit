import React from "react"
import * as Yup from "yup"
import { Formik, Form } from "formik"

import { TextInput, EmailInput, PhoneInput, Select, RadioButton, TextArea } from "components/utilities/form"

const SurveyForm = () => {
  const initialValues = {
  }
  
  const validationSchema = Yup.object({
  })

  const submit = (values, setSubmitting) => {
  }

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={(values, setSubmitting) => {submit(values, setSubmitting)}}>
      {() => (
        <Form>
          <h5>
            ZIPREMIT MONEY TRANSFER THAT PROVIDES VALUE ADDED SERVICE WHILE SOLVING PROBLEMS &amp; IMPACTING COMMUNITIES
          </h5>

          <p className="text-danger">
            To help us improve our service to you please kindly complete this quick survey. At the end of the survey a 10% code will be generated and can use for your next send money to family. Code is ONLY used once.
          </p>

          <TextInput name="full_name" label="Full Name" />

          <PhoneInput name="mobile" label="Mobile #" />

          <EmailInput name="email_address" label="Email Address" />

          <div className="form-row">
            <Select name="from" className="col-sm-6" label="Where do you send money from"></Select>

            <Select name="to" className="col-sm-6" label="and to what country"></Select>
          </div>

          <label htmlFor="send_often">How often do you send money to family</label>

          <RadioButton name="send_often">
            Once per month
          </RadioButton>

          <RadioButton name="send_often">
            2 times per month
          </RadioButton>

          <RadioButton name="send_often">
            2-3 times per month
          </RadioButton>

          <RadioButton name="send_often">
            Rarely
          </RadioButton>

          <Select name="next_market" label="What market do you want us to service next?"></Select>

          <label htmlFor="recommend">Would you recommend our service to family and friends</label>

          <RadioButton name="recommend">
            Definitely
          </RadioButton>

          <RadioButton name="recommend">
            Likely
          </RadioButton>

          <RadioButton name="recommend">
            Unlikely
          </RadioButton>

          <RadioButton name="recommend">
            Not at all
          </RadioButton>

          <TextArea name="comments" label="Comments" />

          <button type="submit" className="btn btn-secondary">
            Submit
          </button>
        </Form>
      )}
    </Formik>
  )
}

export default SurveyForm
