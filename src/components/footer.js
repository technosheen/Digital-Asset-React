import React from 'react'

import PropTypes from 'prop-types'

import './footer.css'

const Footer = (props) => {
  return (
    <footer
      className={`footer-footer section-container ${props.rootClassName} `}
    >
      <div className="footer-max-width max-content-container">
        <div className="footer-copyright">
          <span className="footer-text">
            <span className="">.</span>
            <span className="">© All rights reserved </span>
            <a
              href="https://digitalasset.com/"
              target="_blank"
              rel="noreferrer noopener"
              className="footer-link"
            >
              Digital Asset.
            </a>
          </span>
        </div>
      </div>
    </footer>
  )
}

Footer.defaultProps = {
  rootClassName: '',
  rootClassName1: '',
}

Footer.propTypes = {
  rootClassName: PropTypes.string,
  rootClassName1: PropTypes.string,
}

export default Footer
