import React from 'react'
import styled from 'styled-components'
import { PolicuIssuesData } from '../data/PolicuIssiesData.js'
import { SectionContainer, SectionTitle, SectionList } from '../components/SectionStyle.js';
import PolicuIssuesModal from '../components/modal/PolicuIssuesModal.js';
import { useModal } from '../components/contexts/ModalProvider.js';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: fit-content;
  margin: 4rem 0;
  div{
    h4{
      width: 80%;
      margin: 0;
      font-size: 1.5rem;
      font-style: normal;
      font-weight: 700;
      line-height: 150%;
      padding: 0 1rem 1rem 1rem;
    }
  }
  img{
    border-radius:1.5rem;
  }
`
function PolicuIssues() {

  const { openModal } = useModal();
  const handleOpenModal = (id) => {
    openModal({
      component: PolicuIssuesModal,
      props: { policuIssiesData: PolicuIssuesData, Id: id}
    });
  };

  const IssuesCard = PolicuIssuesData.map((item)=>(
    <Card key={item.id} onClick={()=> handleOpenModal(item.id)}>
      <div>
        <h4>{item.cardTitle}</h4>
      </div>
      <img src={item.imgSrc} alt={item.cardTitle} />
    </Card>
  ));

  return (
    <SectionContainer style={{backgroundColor:'#FDFCFB',flex: '1 0 0'}}>
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