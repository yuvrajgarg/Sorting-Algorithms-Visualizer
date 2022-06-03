import React from 'react'
import './Footer.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';


function Footer() {
  return <div className = 'footer'>
      <div className="footer__text">Made with ❤ by Yuvraj Garg</div>
      <div className ='footer__icon'><GitHubIcon href = 'https://www.google.com'/></div> 
      <div className ='footer__icon'><LinkedInIcon /></div>
      <div className ='footer__icon'><InstagramIcon /></div>
      <div className ='footer__icon'><YouTubeIcon /></div>
    </div>
}

export default Footer