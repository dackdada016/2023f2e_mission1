import React from 'react'
import styled from 'styled-components'

const SloganTitle = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  margin: 104px 0;
  gap: 1rem;
  h2{
    margin: 0;
    font:400 3.25rem 'Mantou Sans';
    width: fit-content;
    background: -webkit-linear-gradient(45deg, #E6793B 1.54%, #FF4185 97.86%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
    white-space: pre-line;
    text-align: center;
    letter-spacing: 2px;
    line-height: 105%;
    @media (min-width: 993px) {
      font-size: 4rem;
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
function IdentificationSlogan() {
  return (
    <SloganTitle>
      <h2>台灣的明天 喵先鋪路</h2>
        <CandidateName>
          <span>3</span><h1>喵立翰 Mioa Li-Han</h1>
        </CandidateName>
    </SloganTitle>
  )
}

export default IdentificationSlogan