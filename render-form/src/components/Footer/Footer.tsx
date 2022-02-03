import React from 'react'
import Link from '../Link/Link'
import leverLogo from '../../assets/imgs/lever-logo-full.svg'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer-container'>
        <div className="footer-link-container">
        <Link linkName='Render Home Page'/>
        </div>
        <div className='footer-note'>
            <div className="footer-note__link">
                <a href='#'>Jobs Powered by</a>
                <img src={leverLogo} alt="lever logo"/>
            </div>
        </div>

    </div>
  )
}

export default Footer
