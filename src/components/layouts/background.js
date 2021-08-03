import React from "react"
import PropTypes from "prop-types"

const Background = ({ bg, opacity, image, ...props }) => {
  const scroll = props.scroll ? "scroll" : "fixed"

  return (
    <section className={`bg-image-wrapper ${props.className}`}>
      {!props.nomask && (
        <div className={`bg-image-mask bg-${bg} opacity-${opacity}`} />
      )}

      <div
        className={`bg-image bg-image-${scroll}`}
        style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center right' }}
      />

      <div className="bg-image-content">
        <div className="container">
          {props.children}
        </div>
      </div>
    </section>
  )
}

Background.defaultProps = {
  bg: "dark",
  opacity: "7",
  className: "section"
}

Background.propTypes = {
  bg: PropTypes.string,
  opacity: PropTypes.string,
  image: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  nomask: PropTypes.bool,
  scroll: PropTypes.bool,
  className: PropTypes.string,
}

export default Background
