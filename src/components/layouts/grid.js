import React from "react"
import PropTypes from "prop-types"

const Grid = ({ ...props }) => (
  <div className="grid border-separator">
    <div className="row">
      {props.children}
    </div>
  </div>
)

Grid.propTypes = {
  children: PropTypes.node.isRequired
}

export default Grid
