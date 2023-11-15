import React from 'react'
import IconGrouo from './IconGrouo'
import styled from 'styled-components'

const FooterContainer = styled.footer`
  background: var(--bg-2, #F7ECE1);
`

function Footer() {
  return (
    <FooterContainer>
      <article>
        <p>喵立翰 Mioa Li-Han</p>
        <IconGrouo />
        <p>&copy; 2024 喵立翰 Mioa Li-Han 版權所有</p>
      </article>
      <address>
        <ul>
          <p>競選總部</p>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </address>
    </FooterContainer>
  )
}

export default Footer