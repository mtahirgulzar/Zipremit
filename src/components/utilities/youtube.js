import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import classnames from "classnames"
import Modal from "react-bootstrap/Modal"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Trans } from "gatsby-plugin-react-i18next"

import overlapb from "images/others/overlapb.jpg"
import overlapf from "images/others/overlapf.jpg"

const Youtube = ({ embed, ...props }) => {
  const base = "https://www.youtube.com/embed/"
  const extra = "?autoplay=1&amp;modestbranding=1&amp;showinfo=0&amp;rel=0"
  const src = base + embed + extra

  const [show, setShow] = useState(false);

  useEffect(() => {
    if (show) {
      const iframe = document.getElementById("youtube")
      iframe.setAttribute("allow", "autoplay")
      iframe.setAttribute("src", src)
    }
  })

  return (
    <>
      <button className="btn btn-outline-light m-2" onClick={() => setShow(true)}>
        <FontAwesomeIcon icon={props.icon} className={props.children ? "mr-2" : "mr-0"} />
        <Trans>{props.children}</Trans>
      </button>

      <Modal show={show} backdrop="static" size="lg" dialogClassName="youtube" centered>
        <button className="close opacity-10" onClick={() => setShow(false)}>
          <span className="mr-n3">&times;</span>
        </button>

        <Modal.Body className="p-0">
          <div className="embed-responsive embed-responsive-16by9">
            <iframe id="youtube" className="embed-responsive-item" title="Youtube" />
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

Youtube.defaultProps = {
  icon: "play-circle",
}

Youtube.propTypes = {
  icon: PropTypes.string,
  embed: PropTypes.string.isRequired,
}

const Figure = ({ className, embed }) => (
  <figure className={classnames("youtube", className)}>
    <figure>
      <img src={overlapb} alt="Overlap Behind" />

      <img src={overlapf} alt="Overlap Front" />
    </figure>
    
    <Youtube icon="play" embed={embed} />
  </figure>
)

Figure.propTypes = {
  className: PropTypes.string,
  embed: PropTypes.string.isRequired
}

Youtube.Figure = Figure

export default Youtube
