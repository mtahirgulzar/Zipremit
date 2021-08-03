import React from "react"
import { Formik, Form } from "formik"

import { TextInput, EmailInput, PhoneInput } from "components/utilities/form"

const JobApplicationForm = () => {
  return (
    <Formik>
      {({}) => (
        <Form>
          <h5 className="font-weight-bold">
            Apply for this job
          </h5>

          <p className="text-2 my-4">
            Complete this application form to apply for this job
          </p>

          <div className="form-row">
            <TextInput name="first_name" className="col-sm-6" label="First Name" />

            <TextInput name="last_name" className="col-sm-6" label="Last Name" />
          </div>

          <div className="form-row">
            <EmailInput name="email" className="col-sm-6" label="Email Address" />

            <PhoneInput name="phone" className="col-sm-6" label="Mobile Number" />
          </div>

          <div className="form-row"></div>

          <hr />

          <button className="mt-4 btn btn-apply">
            Apply
          </button>
        </Form>
      )}
    </Formik>
  )
}

export default JobApplicationForm
