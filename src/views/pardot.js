import React from 'react'

import { Helmet } from 'react-helmet'

import HeaderNoNav from '../components/header-no-nav'
import AppComponent from '../components/component'
import Footer from '../components/footer'
import './pardot.css'

const Pardot = (props) => {
  return (
    <div className="pardot-container">
      <Helmet>
        <title>Pardot - Digital Asset</title>
        <meta property="og:title" content="Pardot - Digital Asset" />
      </Helmet>
      <HeaderNoNav rootClassName="header-no-nav-root-class-name"></HeaderNoNav>
      <main className="pardot-body main">
        <div className="pardot-container1 preferences-container">
          <AppComponent></AppComponent>
        </div>
      </main>
      <Footer rootClassName="footer-root-class-name1"></Footer>
    </div>
  )
}

export default Pardot
