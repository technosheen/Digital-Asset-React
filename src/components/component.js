import React from 'react'

import PropTypes from 'prop-types'

import './component.css'

const AppComponent = (props) => {
  return (
    <div className="component-container">
      <span className="component-text">{props.text}</span>
    </div>
  )
}

AppComponent.defaultProps = {
  text: '%%content%%',
}

AppComponent.propTypes = {
  text: PropTypes.string,
}

export default AppComponent
