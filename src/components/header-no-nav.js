import React from 'react'

import PropTypes from 'prop-types'

import './header-no-nav.css'

const HeaderNoNav = (props) => {
  return (
    <header
      data-role="Header"
      className={`header-no-nav-header ${props.rootClassName} `}
    >
      <div className="header-no-nav-max-width">
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="header-no-nav-image"
        />
      </div>
    </header>
  )
}

HeaderNoNav.defaultProps = {
  image_alt: 'logo',
  rootClassName: '',
  image_src: '/playground_assets/digital-asset-logo-light.svg',
}

HeaderNoNav.propTypes = {
  image_alt: PropTypes.string,
  rootClassName: PropTypes.string,
  image_src: PropTypes.string,
}

export default HeaderNoNav
