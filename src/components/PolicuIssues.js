import React from 'react'
import styled from 'styled-components'
import { PolicuIssuesData } from '../data/PolicuIssiesData.js'

const PolicuIssuesTitle = styled.div`
  display:flex;
  flex-direction:column;
  align-items: center;
  margin:auto;
  span{
    font-weight: 600;
    padding: 0.5rem 0.75rem;
    border-radius: 0.5rem;
    background: rgba(51, 65, 85, 1);
    color:rgba(255, 255, 255, 1);
  }
  h2{
    margin: 0;
    font:400 4rem 'Mantou Sans';
    background: -webkit-linear-gradient(45deg, #E6793B 1.54%, #FF4185 97.86%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
    line-height: 93px;
  }

`
const IssuesCard = PolicuIssuesData.map((item)=>(
  <div key={item.id}>
    <div>
      <h4>{item.cardTitle}</h4>
    </div>
    <img src={item.imgSrc} alt={item.description} />
  </div>
));


function PolicuIssues() {
  return (
    <section class="policu-issues">
      <PolicuIssuesTitle>
        <span>policu issues</span>
        <h2>政策議題</h2>
      </PolicuIssuesTitle>
      <div>
        {IssuesCard}
      </div>
    </section>
  )
}

export default PolicuIssues