import React from 'react'
import Logo from "../assets/images/logo.svg"
import Instagram from "../assets/images/ig_icon.svg"
import Facebook from '../assets/images/fb_icon.svg'
import Youtube from '../assets/images/youtue_icon.svg'
import styled from 'styled-components'

const StyledHeader = styled.header `
  *{border:1px solid pink;}
  width: 100%;
  display:flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  background-color: #FFFFFF;
`
const DivLogoSection = styled.div `
  background-color: rgba(255, 255, 255, 0.9);
  display:flex;
  align-items: center;
  gap:0.5rem;
  img{
    width: 50px;
  }
  h4{
    font-size: 1.5rem;
  }
`
const Nav = styled.nav`
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
      padding:10px;
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
    padding: 0.5rem 0;
    img{
      width: 2rem;
    }
  }
`

function Header() {
  return (
    <StyledHeader>
      <DivLogoSection>
        <img src={Logo} alt="競選Logo" />
        <h4>喵立翰 Mioa Li-Han</h4>
      </DivLogoSection>
      <Nav>
        <ul>
          <li>候選人主張</li>
          <li>最新活動</li>
          <li>政策議題</li>
          <li>小額捐款</li>
          <li>民眾服務信箱</li>
        </ul>
      </Nav>
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