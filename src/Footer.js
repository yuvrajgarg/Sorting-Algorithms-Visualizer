import React from 'react'
import './Footer.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';


function Footer() {
  return <div className = 'footer'>
      <div className="footer__text">Made with ❤ by Yuvraj Garg</div>
      <div className ='footer__icon'><a href = 'https://github.com/yuvrajgarg' target = 'blank'><GitHubIcon /></a></div> 
      <div className ='footer__icon'><a href='https://www.linkedin.com/in/yuvrajgarg100/' target='_blank'><LinkedInIcon /></a></div>
      <div className ='footer__icon'><a href='' target='_blank'><InstagramIcon /></a></div>
      <div className ='footer__icon'><a href='https://www.youtube.com/channel/UClEGLDy9TcEnBMX5A94Cikg' target='_blank'><YouTubeIcon /></a></div>
    </div>
}

export default Footer