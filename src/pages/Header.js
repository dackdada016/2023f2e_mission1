import React, { useEffect, useState, useRef } from 'react'
import Logo from "../assets/images/logo.svg"
import styled from 'styled-components'
import IconGrouo from '../components/icon/IconGrouo'
import { useModal } from '../components/contexts/ModalProvider.js';

const StyledHeader = styled.header `
  width: 100%;
  .fixed-nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
  }
  &.hidden {
    visibility: hidden;
  }
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
  }
`

function Header() {
  // nav scroll
  const [isScrolled, setScrolled] = useState(false);
  const navRef = useRef(null);
  useEffect(()=>{
    const navHeight = navRef.current?.offsetHeight;
    const handleScroll = () => {
      setScrolled(window.scrollY > navHeight);
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])
  // if the modal is open, the navbar should be hidden.
  const { modalConfig } = useModal();
  const isModalOpen = modalConfig.component !== null;
  return (
    <StyledHeader className={ isModalOpen ? 'hidden' : ''}>
      <nav ref={navRef} className={isScrolled ? 'fixed-nav' : ''}>
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