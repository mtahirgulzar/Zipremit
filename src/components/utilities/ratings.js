import React from "react"
import PropTypes from "prop-types"
import classnames from "classnames"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Ratings = ({ size, className }) => {
  const stars = []

  for (let i = 0; i < size; i++) {
    stars.push(
      <li key={i}>
        <FontAwesomeIcon icon="star" />
      </li>
    )    
  }

  return (
    <div className="d-flex align-items-center">
      <ul className={classnames("ratings", className)}>
        {stars}
      </ul>

      <span className="text-muted ml-2">
        ({size})
      </span>
    </div>
  )
}

Ratings.defaultProps = {
  size: 0
}

Ratings.propTypes = {
  size: PropTypes.number,
  className: PropTypes.string
}

export default Ratings
