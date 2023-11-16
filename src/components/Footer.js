import React from 'react'
import IconGrouo from './IconGrouo'
import styled from 'styled-components'
// import { SectionContainer } from './SectionStyle'

const FooterContainer = styled.footer`
  display: flex;
  padding: 2rem 18.75rem;
  gap: 1rem;
  flex: 1 0 0;
  background: var(--bg-2, #F7ECE1);
  ${'' /* justify-content: space-evenly; */}
  align-items: center;
`
const FooterArtcle = styled.article`
  display: flex;
  flex-direction: column;
  padding: 0.75rem 1rem;
  gap: 1rem;
  flex: 1 0 0;
  div{
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: rgba(218, 125, 74, 1);
    span {
      width: 50px;
      height: 50px;
      padding: 0.5rem;
      border-radius: 50% 50% ;
      display:flex;
      justify-content: center;
      align-items: center;
      font-size: 2rem;
      font-weight: 900;
      text-align: center;
      color: rgba(255, 255, 255, 1);
      background: linear-gradient(90deg, #E6793B 1.54%, #FF4185 97.86%);
    }
    h3{
      font-size:1.5rem;
      margin:0;
    }
  }
  p {
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    margin: 0;
  }

`
const iconStyle = {
  display: 'flex',
  width: '3rem',
  height: '3rem',
  padding: '0.625rem',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '31.25rem',
  background:  '#FFF',
  gap: '0.5rem'
};
const FooterAddress = styled.address`
  display: flex;
  flex-direction: column;
  padding: 0.75rem 1rem;
  flex: 1 0 0;
  p {
    margin: 0;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: Bold;
    line-height: 150%;
  }
  ul {
    list-style-type: none;
    padding-inline-start: 0;
    display: flex;
    flex-direction: column;
    flex: 1 0 0;
    gap: 0.5rem;
    li {
      font-size: 1rem;
      font-style: normal;
      font-weight: 400;
      line-height: 150%;
    }
  }
`

function Footer() {
  return (
    <FooterContainer>
      <FooterArtcle>
        <div>
          <span>3</span><h3>喵立翰 Mioa Li-Han</h3>
        </div>
        <IconGrouo style={iconStyle} />
        <p>&copy; 2024 喵立翰 Mioa Li-Han 版權所有</p>
      </FooterArtcle>
      <FooterAddress>
        <p>競選總部</p>
        <ul>
          <li>辦公室地址：喵星區，毛茸茸大道88號，喵喵大樓3樓</li>
          <li>電話：(02) 888-5678 </li>
          <li>電子郵件地址：meowoffice@linmeow.tw</li>
        </ul>
      </FooterAddress>
    </FooterContainer>
  )
}

export default Footer