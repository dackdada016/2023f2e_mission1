import React from 'react'
import Logo from "../../assets/images/logo.svg"
import styled from 'styled-components'
import IconGrouo from '../icon/IconGrouo'

const StyledHeader = styled.header `
  width: 100%;
  nav {
    display:flex;
    justify-content: space-between;
    margin: 0.75rem 1.5rem;
    padding: 0.75rem 1.5rem;
    backdrop-filter: blur(3px);
    background-color: rgba(255, 255, 255, 0.9);
    border-radius: 1rem;
    border:1px solid rgba(255, 255, 255, 1);
    div {
      width: fix-content;
      display:flex;
      align-items: center;
      gap:0.5rem;
      h4{
        font-size: 1.5rem;
        font-weight: 700;
        color: rgba(218, 125, 74, 1);
        margin: 0;
        line-hight: 2.25rem;
      }
    }
    ul{
      padding-inline-start: 0;
      display:flex;
      gap: 1rem;
      align-items: center;
      li{
        list-style-type: none;
        font-size: 1.25rem;
      }
      @media (max-width: 768px) {
      ${'' /* width: 343px;
      height: 255px; */}
      }
      @media (min-width: 993px) {
        ${'' /* width: 723px; 
        height: 538px; */}
      }
    }
    ${'' /* a {
      width:2rem;
      margin: 0;
      img{
        width: 2rem;
      }
    } */}
  }
`

function Header() {
  return (
    <StyledHeader>
      <nav>
        <div>
          <img src={Logo} alt="競選Logo" />
          <h4>喵立翰 Mioa Li-Han</h4>
        </div>
        <ul>
          <li>候選人主張</li>
          <li>最新活動</li>
          <li>政策議題</li>
          <li>小額捐款</li>
          <li>民眾服務信箱</li>
        </ul>
          <div>
            <IconGrouo />
          </div>
      </nav>
    </StyledHeader>
  )
}

export default Header