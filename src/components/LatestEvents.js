import React from 'react'
import styled from 'styled-components'
import EventForumPhotos from '../assets/images/台北論壇.png'
import {LatesEventsData} from '../data/LatesEventsData.js'
import ArrowIcon from '../assets/images/arrow_forward.svg'
import { SectionContainer, SectionTitle, SectionList, SectionContentButton } from './SectionStyle.js';

const EventCard = styled.article`
  width: 100%;
  img{
    width: 100%;
  }
  div{
    display:flex;
    flex-direction:column;
    gap:0.5rem;
    padding-top:1rem;
    h5{
      font-size:1.25rem;
      margin:0;
      line-height:30px;
    }
    p{
      margin:0;
    }

  }
`
const EventCardList = styled.section`
  display:flex;
  flex-direction:column;
  gap: 1rem;
  div{
    display:flex;
    ${'' /* justify-content:space-between; */}
    width: 100%;
    gap: 1rem;
    img{
      width: 100%;
      height: 100%;
      border-radius: 0.5rem;
      object-fit: cover;
    }
    div{
      flex-direction:column;
      gap: 0.5rem;
      h5{
        font-size:1.25rem;
        line-height: normal;
        letter-spacing: normal;
        font-weight: 700;
        margin:0;
      }
      p{
        margin:0;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        text-overflow: ellipsis;
      }
    }
  }
`
// 卡片元件
const eventElements = LatesEventsData.map((item) => (
    <div key={item.id}>
      <img src={item.imgSrc} alt={item.title}/>
      <div>
        <span>{item.date}</span>
        <h5>{item.title}</h5>
        <p>{item.description}</p>
      </div>
    </div>
));


function LatestEvents() {
  return (
    <SectionContainer>
      <SectionTitle>
        <span>letest events</span>
        <h2>最新活動</h2>
      </SectionTitle>
      <SectionList style={{alignItems:'flex-start'}}>
        <EventCard>
          <img src={EventForumPhotos} alt="參與台北寵物論壇"/>
          <div>
            <span>Timestamp</span>
            <h5>參與台北寵物論壇，爭取貓咪友善環境</h5>
            <p>炎炎夏日的周六，我走進了台北寵物論壇，帶著一副貓耳髮箍，決定要全力宣傳「貓咪至上」的理念！我相信，我們的都市中，每一隻貓咪都應該有自己的 VIP 休憩空間。</p>
          </div>
        </EventCard>
        <EventCardList>
          {eventElements}
          <SectionContentButton><p>查看更多</p><img src={ArrowIcon} alt='ArrowIcon'/></SectionContentButton>
        </EventCardList>
      </SectionList>
    </SectionContainer>
  )
}

export default LatestEvents