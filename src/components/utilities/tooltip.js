import React from "react"
import PropTypes from "prop-types"
import Tooltip from "react-bootstrap/Tooltip"
import OverlayTrigger from "react-bootstrap/OverlayTrigger"

const ToolTip = ({ placement, text, ...props }) => {
  return (
    <OverlayTrigger placement={placement} overlay={
      <Tooltip>{text}</Tooltip>
    }>
      {props.children}
    </OverlayTrigger>
  )
}

ToolTip.defaultProptypes = {
  placement: "top"
}

ToolTip.propTypes = {
  placement: PropTypes.string,
  text: PropTypes.string.isRequired
}

export default ToolTip
