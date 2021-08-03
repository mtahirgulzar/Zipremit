import React from "react"
import loadable from "@loadable/component"

import "owl.carousel/dist/assets/owl.carousel.min.css"
import "owl.carousel/dist/assets/owl.theme.default.min.css"

const OwlCarousel = loadable(() => import("react-owl-carousel"))

const Carousel = ({ ...props }) => {
  return (
    <OwlCarousel className="owl-theme" {...props}>
      {props.children}
    </OwlCarousel>
  )
}

Carousel.defaultProps = {
  loop: true,
  nav: false,
  autoplay: true,
}

export default Carousel
