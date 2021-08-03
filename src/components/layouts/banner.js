import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"

const Banner = ({ style, image, ...props }) => {
  return (
    <div className={`banner style-${style}`}>
      <div className="banner-item rounded shadow">
        <div className="banner-mask" />

        <Img fluid={image.childImageSharp.fluid} />

        <div className="banner-caption rounded-bottom">
          {props.children}
        </div>
      </div>
    </div>
  )
}

Banner.defaultProps = {
  style: "1"
}

Banner.propTypes = {
  style: PropTypes.string,
  children: PropTypes.node.isRequired
}

export default Banner
