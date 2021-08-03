import React from "react"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Feature = ({ boxStyle, color, ...props }) => {
  return (
    <div className={`feature-box style-${boxStyle}`}>
      {props.icon &&
        (
          <div className={`feature-box-icon ${color}`}>
            <FontAwesomeIcon icon={props.icon} />
          </div>
        )
      }

      {props.text &&
        (
          <div className={`feature-box-text ${color}`}>
            {props.text}
          </div>
        )
      }

      {props.image &&
        (
          <div className="feature-box-image">
            <img src={props.image} className="img-thumbnail" alt="Icon" />
          </div>
        )
      }

      {props.children}
    </div>
  )
}

Feature.defaultProps = {
  color: "primary"
}

Feature.propTypes = {
  icon: PropTypes.string,
  text: PropTypes.string,
  image: PropTypes.string,
  color: PropTypes.string,
  boxStyle: PropTypes.string.isRequired
}

export default Feature
