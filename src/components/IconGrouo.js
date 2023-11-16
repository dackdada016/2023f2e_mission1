import React from 'react'
import Instagram from "../assets/images/ig_icon.svg"
import Facebook from '../assets/images/fb_icon.svg'
import Youtube from '../assets/images/youtue_icon.svg'
import styled from 'styled-components'

const Group = styled.div`
  a {
    align-items: center;
    width:2rem;
    margin: 0;
    img{
      width: 2rem;
    }
  }
`

function IconGrouo(props) {
  return (
    <Group >
      <a href="https://www.facebook.com/" style={props.style}>
        <img src={Facebook} alt="link to facebook" />
      </a>
      <a href="https://www.instagram.com/" style={props.style}>
        <img src={Instagram} alt="link to instagram" />
      </a>
      <a href="https://www.youtube.com/" style={props.style}>
        <img src={Youtube} alt="link to youtube " />
      </a>
    </Group>
  )
}

export default IconGrouo