import React from 'react'

import PropTypes from 'prop-types'

import './landing-content-container.css'

const LandingContentContainer = (props) => {
  return (
    <div
      className={`landing-content-container-container ${props.rootClassName} `}
    >
      <span className="landing-content-container-content-tag">
        {props.landingContent}
      </span>
    </div>
  )
}

LandingContentContainer.defaultProps = {
  rootClassName: '',
  landingContent: '%%content%%',
}

LandingContentContainer.propTypes = {
  rootClassName: PropTypes.string,
  landingContent: PropTypes.string,
}

export default LandingContentContainer
