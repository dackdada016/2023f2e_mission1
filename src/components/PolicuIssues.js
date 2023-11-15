import React from 'react'
import styled from 'styled-components'
import { PolicuIssuesData } from '../data/PolicuIssiesData.js'
import { SectionContainer, SectionTitle, SectionList } from './SectionStyle.js';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: fit-content;
  div{
    h4{
      width: 80%;
      font-size: 1.5rem;
      font-style: normal;
      font-weight: 700;
      line-height: 150%; /* 2.25rem */
    }
  }
  img{
    border-radius:1.5rem;
  }
`


const IssuesCard = PolicuIssuesData.map((item)=>(
  <Card key={item.id}>
    <div>
      <h4>{item.cardTitle}</h4>
    </div>
    <img src={item.imgSrc} alt={item.description} />
  </Card>
));


function PolicuIssues() {
  return (
    <SectionContainer style={{backgroundColor:'#FDFCFB',padding:"104px 0"}}>
      <SectionTitle>
        <span>policu issues</span>
        <h2>政策議題</h2>
      </SectionTitle>
      <SectionList >
        {IssuesCard}
      </SectionList>
    </SectionContainer>
  )
}

export default PolicuIssues