import React from 'react'
import Logo from "../assets/images/logo.svg"
import Instagram from "../assets/images/ig_icon.svg"
import Facebook from '../assets/images/fb_icon.svg'
import Youtube from '../assets/images/youtue_icon.svg'
import styled from 'styled-components'

const StyledHeader = styled.header `
  border:1px solid rgba(255, 255, 255, 1);
  border-radius: 1rem;
  display:flex;
  justify-content: space-between;
  width:100%;
  ${'' /* position: fixed;
  top: 10px;
  left: 10px; */}
  padding: 0.75rem 1.5rem;
  backdrop-filter: blur(3px);
  background-color: rgba(255, 255, 255, 0.9);
  div {
    display:flex;
    align-items: center;
    gap:0.5rem;
    img{
      width: 50px;
    }
    h4{
      font-size: 1.5rem;
      font-weight: 700;
      color: rgba(218, 125, 74, 1);
      margin: 0;
      line-hight: 2.25rem;
    }
  }
  nav {
    width: 100%
    border:1px solid pink;
    display:flex;
    ul{
      padding-inline-start: 0;
      display:flex;
      gap: 1rem;
      align-items: center;
      li{
        list-style-type: none;
        font-size: 1rem;
        font-weight: bolder;
      }
    }
  }
`
const DivIconGroup = styled.div`
  display:flex;
  align-items: center;
  gap: 1rem;
  a {
    width:2rem;
    margin: 0;
    img{
      width: 2rem;
    }
  }
`

function Header() {
  return (
    <StyledHeader>
      <div>
        <img src={Logo} alt="競選Logo" />
        <h4>喵立翰 Mioa Li-Han</h4>
      </div>
      <nav>
        <ul>
          <li>候選人主張</li>
          <li>最新活動</li>
          <li>政策議題</li>
          <li>小額捐款</li>
          <li>民眾服務信箱</li>
        </ul>
      </nav>
      <DivIconGroup>
        <a href="https://www.facebook.com/">
          <img src={Facebook} alt="link to facebook" />
        </a>
        <a href="https://www.instagram.com/">
          <img src={Instagram} alt="link to instagram" />
        </a>
        <a href="https://www.youtube.com/">
          <img src={Youtube} alt="link to youtube " />
        </a>
      </DivIconGroup>
    </StyledHeader>
  )
}

export default Header