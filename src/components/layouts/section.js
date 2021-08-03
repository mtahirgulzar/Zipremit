import React from "react"
import PropTypes from "prop-types"
import classnames from "classnames"

const Section = ({ className, ...props }) => (
  <section className={classnames('section', className)} {...props}>
    <div className="container">
      {props.children}
    </div>
  </section>
)

Section.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
}

export default Section
