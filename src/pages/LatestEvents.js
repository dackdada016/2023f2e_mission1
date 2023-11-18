import React from 'react'
import styled from 'styled-components'
import {LatesEventsData} from '../../data/LatesEventsData.js'
import ArrowIcon from '../../assets/images/arrow_forward.svg'
import { SectionContainer, SectionTitle, SectionList, SectionContentButton } from '../SectionStyle.js';
import EventCard from '../card/EventCard.js';
import EventsList from '../card/EventsList.js';

// 卡片元件
const eventElements = LatesEventsData.map((item) => (
  <EventsList key={item.id}>
    <div>
      <img src={item.imgSrc} alt={item.title} />
    </div>
    <div>
      <span>{item.date}</span>
      <h5>{item.title}</h5>
      <p>{item.description}</p>
    </div>
  </EventsList>
));
// 列表樣式 
const ListContent = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 50%;
  @media (max-width: 768px) {
    width: 100%;
  }
`
function LatestEvents() {
  return (
    <SectionContainer>
      <SectionTitle>
        <span>letest events</span>
        <h2>最新活動</h2>
      </SectionTitle>
      <SectionList style={{alignItems:'flex-start'}}>
        <EventCard cardContent={LatesEventsData[0]} />
        <ListContent>
          {eventElements}
          <SectionContentButton><p>查看更多</p><img src={ArrowIcon} alt='ArrowIcon'/></SectionContentButton>
        </ListContent>
      </SectionList>
    </SectionContainer>
  )
}

export default LatestEvents