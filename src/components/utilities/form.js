import React from "react"
import classnames from "classnames"
import { Field, ErrorMessage } from "formik"

const FieldSet = ({ legend, ...props }) => (
  <fieldset>
    <legend>{legend}</legend>

    <hr style={{borderColor: "#333"}} />

    {props.children}
  </fieldset>
)

const TextInput = ({ label, className, variant, children, ...props }) => (
  <div className={classnames("form-group", className)}>
    {label && (<label htmlFor={props.name}>{label}</label>)}

    <Field
      {...props}
      type="text"
      id={props.name}
      placeholder={children}
      className={classnames("form-control", variant)}
    />

    <div className="input-error">
      <ErrorMessage name={props.name} />
    </div>
  </div>
)

const TextArea = ({ label, className, variant, children, ...props }) => (
  <div className={classnames("form-group", className)}>
    {label && (<label htmlFor={props.name}>{label}</label>)}

    <Field
      {...props}
      as="textarea"
      id={props.name}
      placeholder={children}
      className={classnames("form-control", variant)}
    />

    <div className="input-error">
      <ErrorMessage name={props.name} />
    </div>
  </div>
)

const NumberInput = ({ label, className, variant, children, ...props }) => (
  <div className={classnames("form-group", className)}>
    {label && (<label htmlFor={props.name}>{label}</label>)}

    <Field
      {...props}
      type="number"
      id={props.name}
      placeholder={children}
      className={classnames("form-control", variant)}
    />

    <div className="input-error">
      <ErrorMessage name={props.name} />
    </div>
  </div>
)

const EmailInput = ({ label, className, variant, children, ...props }) => (
  <div className={classnames("form-group", className)}>
    {label && (<label htmlFor={props.name}>{label}</label>)}

    <Field
      {...props}
      type="email"
      name={props.name}
      placeholder={children}
      className={classnames("form-control", variant)}
    />

    <div className="input-error">
      <ErrorMessage name={props.name} />
    </div>
  </div>
)

const PhoneInput = ({ label, className, variant, children, ...props }) => (
  <div className={classnames("form-group", className)}>
    {label && (<label htmlFor={props.name}>{label}</label>)}

    <Field
      {...props}
      type="tel"
      name={props.name}
      placeholder={children}
      className={classnames("form-control", variant)}
    />

    <div className="input-error">
      <ErrorMessage name={props.name} />
    </div>
  </div>
)

const PasswordInput = ({ label, name, className, variant, ...props }) => (
  <div className={classnames("form-group", className)}>
    {label && (
      <label>
        {label}
      </label>
    )}

    <Field
      type="password"
      name={name}
      placeholder={props.children}
      className={classnames("form-control", variant)}
    />

    <div className="input-error">
      <ErrorMessage name={name} />
    </div>
  </div>
)

const CheckBox = ({ children, className, ...props }) => (
  <div className={classnames("form-check", className)}>
    <label htmlFor={props.name}>
      <Field
        {...props}
        type="checkbox"
        id={props.name}
        className="form-check-input"
      />

      {children}
    </label>
  </div>
)

const RadioButton = ({ children, className, ...props }) => (
  <div className={classnames("form-check", className)}>
    <label htmlFor={props.name}>
      <Field
        {...props}
        type="radio"
        id={props.name}
        className="form-check-input"
      />

      {children}
    </label>
  </div>
)

const Select = ({ label, className, variant, ...props }) => (
  <div className={classnames("form-group", className)}>
    {label && (<label htmlFor={props.name}>{label}</label>)}

    <Field
      {...props}
      as="select"
      name={props.name}
      className={classnames("form-control", variant)}
    />

    <div className="input-error">
      <ErrorMessage name={props.name} />
    </div>
  </div>
)

const DateInput = ({ label, className, variant, children, ...props }) => (
  <div className={classnames("form-group", className)}>
    {label && (<label htmlFor={props.name}>{label}</label>)}

    <Field
      {...props}
      type="date"
      name={props.name}
      placeholder={children}
      className={classnames("form-control", variant)}
    />

    <div className="input-error">
      <ErrorMessage name={props.name} />
    </div>
  </div>
)

export {
  FieldSet,
  TextInput,
  TextArea,
  NumberInput,
  EmailInput,
  PhoneInput,
  PasswordInput,
  CheckBox,
  RadioButton,
  Select,
  DateInput
}
