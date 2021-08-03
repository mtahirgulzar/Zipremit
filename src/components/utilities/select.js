import React, { useEffect } from "react"
import PropTypes from "prop-types"

const Select = ({ title, name, search, ...props }) => {
  useEffect(() => {
    window.jQuery(".selectpicker").selectpicker()
  }, [])

  useEffect(() => {
    window.jQuery(".selectpicjer").empty()
    window.jQuery(".selectpicker").selectpicker("refresh")
  }, [props.children])

  return (
    <select className="selectpicker form-control" tabIndex="-98" title={title} name={name} data-style="select" data-container="body" data-live-search={search} {...props}>
      {props.children}
    </select>
  )
}

Select.defaultProps = {
  search: false,
}

Select.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string.isRequired,
  search: PropTypes.bool
}

export default Select
