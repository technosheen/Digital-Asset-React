import React from 'react'

import PropTypes from 'prop-types'

import './navigation-links.css'

const NavigationLinks = (props) => {
  return (
    <nav onClick={props.active} className="">
      <span className="navigation-links-text navigation-Link">
        {props.link1}
      </span>
      <span className="navigation-links-text1 navigation-Link">
        {props.link2}
      </span>
      <span className="navigation-links-text2 navigation-Link">
        {props.link3}
      </span>
      <span className="navigation-links-text3 navigation-Link">
        {props.link4}
      </span>
      <span className="navigation-links-text4 navigation-Link">
        {props.link5}
      </span>
    </nav>
  )
}

NavigationLinks.defaultProps = {
  link5: 'Partners',
  rootClassName: '',
  link1: 'Use Cases',
  active: () => {},
  link2: 'Products',
  link3: 'Developers',
  link4: 'Company',
}

NavigationLinks.propTypes = {
  link5: PropTypes.string,
  rootClassName: PropTypes.string,
  link1: PropTypes.string,
  active: PropTypes.func,
  link2: PropTypes.string,
  link3: PropTypes.string,
  link4: PropTypes.string,
}

export default NavigationLinks
