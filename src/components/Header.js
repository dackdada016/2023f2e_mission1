import React from 'react'
import Logo from "../assets/images/logo.svg"
import Instagram from "../assets/images/ig_icon.svg"
import Facebook from '../assets/images/fb_icon.svg'
import Youtube from '../assets/images/youtue_icon.svg'

function Header() {
  return (
    <header>
      <div class="logo-section">
        <img src={Logo} alt="競選Logo" />
        <h1>喵立翰 Mioa Li-Han</h1>
      </div>
      <nav>
        <ul>
          <li>候選人主張</li>
          <li>最新活動</li>
          <li>政策議題</li>
          <li>小額捐款</li>
          <li>民眾服務信箱</li>
        </ul>
        <div class="icon-group">
          <a href="https://www.facebook.com/">
            <img src={Facebook} alt="link to facebook" />
          </a>
          <a href="https://www.instagram.com/">
            <img src={Instagram} alt="link to instagram" />
          </a>
          <a href="https://www.youtube.com/">
            <img src={Youtube} alt="link to youtube " />
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Header