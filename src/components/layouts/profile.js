import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Profile = ({ image, social, ...props }) => {
  return (
    <div className="profile rounded">
      <Img fluid={image.childImageSharp.fluid} className="rounded" />

      <div className="mt-3">
        {props.children}
      </div>

      <span style={{flex: "1 1 auto"}}></span>

      {social && (
        <ul className="d-inline-flex social-icons social-icons-sm">
          {social.map((item, index) => (
            <li className={item.icon} key={index}>
              <a href={item.link}>
                <FontAwesomeIcon icon={["fab", item.icon]} size="2x" />
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

Profile.propTypes = {
  social: PropTypes.array,
  children: PropTypes.node.isRequired
}

export default Profile
