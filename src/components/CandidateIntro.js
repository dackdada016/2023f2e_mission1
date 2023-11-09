import React from 'react'
import CandidateBackground from '../assets/images/Group-14.svg'
import Candidates from '../assets/images/image 5.svg'
import styled , { keyframes } from 'styled-components'

const animateSlideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;
const CandidateIntroSection = styled.section`
  margin: auto;
  display:flex;
  flex-direction: column;
  gap: 0.5rem; 
  background-color: rgba(255, 255, 255, 1);
`
const CandidateIntroTitle = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  h2{
    margin: 0;
    font:400 3.25rem 'Mantou Sans';
    width: fit-content;
    background: -webkit-linear-gradient(45deg, #E6793B 1.54%, #FF4185 97.86%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
    animation: ${animateSlideUp} 3s forwards;
    animation-fill-mode: both;
    white-space: pre-line;
    text-align: center;
    letter-spacing: 2px;
    line-height: 105%;
    @media (min-width: 993px) {
      font-size: 6rem;
    }
  }
  div {
    margin: auto;
    display:flex;
    align-items: center;
    gap: 1rem;
    h3{
      background-color: rgba(51, 65, 85, 1);
      color:rgba(255, 255, 255, 1);
      border-radius: 1rem;
      padding: 0.75rem 1rem;
      font-size: 1.75rem;
      width:fit-content;
    }
  }
`
const CandidateName = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  background-color: rgba(255, 255, 255, 1);
  color: rgba(218, 125, 74, 1);
  box-shadow: 0 0.25rem 0.75rem 0 rgba(163, 180, 203, 0.2);
  border: 1px solid rgba(255, 255, 255, 1);  
  border-radius: 1rem;
  padding: 0.75rem 1rem;
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
  h1{
    font-size:2.5rem;
    margin:0;
  }
`

const CandidateImage = styled.figure`
  *{
    border:1px solid pink;
  }
  margin: auto;
  width: 723px; 
  height: 538px;
  position: relative;
  &::before{
    content:"";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 16%;
    background: no-repeat center/90% url(${CandidateBackground});
  }
  @media (max-width: 768px) {
    width: 343px;
    height: 255px;
  }
  @media (min-width: 993px) {
    width: 723px; 
    height: 538px;
  }

  img{
    width: 723px; 
    height: 538px;
    animation: ${animateSlideUp} 3s forwards;
    animation-delay: 1.5s;
    animation-fill-mode: both;
    @media (max-width: 768px) {
      width: 343px;
      height: 255px;
    }
  }

`
const Slogan = styled.aside`
  display:flex;
  justify-content: space-between;
  gap: 1.5rem;
  background-color: rgba(218, 125, 74, 1);
  padding: 10px;
  p{
    margin: 0;
    font-family:'Mantou Sans';
    font-size: 4rem;
    font-weight: 400;
    letter-spacing: 2px;
    text-align: center;
    color: rgba(255, 255, 255, 1);
  }
`

function CandidateIntro() {
  return (
    <>
      <CandidateIntroSection>
        <CandidateIntroTitle>
          <h2>台灣的明天 喵先鋪路</h2>
          <div>
            <h3>2024 立委參選人</h3>
            <CandidateName>
              <span>3</span><h1>喵立翰 Mioa Li-Han</h1>
            </CandidateName>
          </div>
        </CandidateIntroTitle>
        <CandidateImage>
          <img src={Candidates} alt="候選人形象照" />
        </CandidateImage>
      </CandidateIntroSection>
      <Slogan>
        <p>為喵星人，護台灣!</p>
        <p>從喵的眼中，看見台灣</p>
        <p>喵的未來，人的希望</p>
      </Slogan>
    </>
  )
}

export default CandidateIntro