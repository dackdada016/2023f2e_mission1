import React from 'react'
import styled from 'styled-components'
import { PolicuIssuesData } from '../data/PolicuIssiesData.js'
import { SectionContainer, SectionTitle, SectionList } from './SectionStyle.js';

const IssuesCard = PolicuIssuesData.map((item)=>(
  <div key={item.id}>
    <div>
      <h4>{item.cardTitle}</h4>
    </div>
    <img src={item.imgSrc} alt={item.description}/>
  </div>
));


function PolicuIssues() {
  return (
    <SectionContainer>
      <SectionTitle>
        <span>policu issues</span>
        <h2>政策議題</h2>
      </SectionTitle>
      <SectionList>
        {IssuesCard}
      </SectionList>
    </SectionContainer>
  )
}

export default PolicuIssues