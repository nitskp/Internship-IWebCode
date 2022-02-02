import React from 'react'
import Link from '../Link/Link'

const Footer = () => {
  return (
    <div className='footer-container'>
        <div className="render-page-link-container">
        <Link linkName='Render Home Page'/>
        </div>
        <div className='footer-note'>
            <div className="footer-note__link">
                <Link linkName='Jobs Powered by'/>
                <img src='../../assets/imgs/lever-logo-full.svg' alt="lever-logo" />
            </div>
        </div>

    </div>
  )
}

export default Footer
