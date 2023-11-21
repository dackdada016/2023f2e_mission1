import React from 'react'
import styled from 'styled-components'
import {LatesEventsData} from '../data/LatesEventsData.js'
import ArrowIcon from '../assets/images/arrow_forward.svg'
import { SectionContainer, SectionTitle, SectionList, SectionContentButton } from '../components/SectionStyle.js';
import EventCard from '../components/card/EventCard.js';
import EventsList from '../components/card/EventsList.js';
import { useModal } from '../components/modal/ModalProvider.js';
import EventsModal from '../components/modal/EventsModal.js';

// 列表樣式 
const ListContent = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 50%;
  @media (max-width: 992px) {
    width: 100%;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`
function LatestEvents() {
  const { openModal } = useModal();
  const handleOpenModal = (id) => {
    openModal({
      component: EventsModal,
      props: { eventData: LatesEventsData, Id: id}
    });
  };


  // 卡片元件
  const eventElements = LatesEventsData.map((item) => (
    <EventsList key={item.id}  onClick={()=> handleOpenModal(item.id)} >
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
          <SectionContentButton onClick={()=>handleOpenModal()}>
            <p>查看更多</p><img src={ArrowIcon} alt='ArrowIcon'/>
          </SectionContentButton>
        </ListContent>
      </SectionList>
    </SectionContainer>
  )
}

export default LatestEvents