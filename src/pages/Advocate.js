import React from 'react'
import styled from 'styled-components'
import { SectionContainer, SectionTitle } from '../components/SectionStyle';
import CandidateImage from '../assets/images/candidateImage.png'

const AdvocateCard = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 40px auto;
  justify-content: stretch;
  align-items: stretch;
  gap: 1.5rem;
  border-radius: 2rem;
  background-color:rgba(255, 255, 255, 1);
  overflow: hidden;
  @media (max-width: 993px) {
    flex-direction: column;
  }
`;

const CandidateStatement = styled.div`
  display: flex;
  padding: 4rem 2.5rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: var(--spacer-32, 2rem);
  flex: 1;
  h3{
    margin: 0;
    font-size : 1.75rem;
    word-break: break-all;
    font-weight: 700;
    line-height: 34px;
    font-style: normal;
    strong{
      color: rgba(218, 125, 74, 1);
    }
  }
  p{
    font-size: 18px;
    font-weight: 400;
    text-wrap: wrap;
  }
`
const CandidateImageFigure = styled.figure`
    display: flex;
    margin: 0;
    width: 50%;
    object-fit: cover;
  @media (max-width: 992px) {
    width: 100%;
  }
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

function Advocate() {
  return (
    <SectionContainer style={{backgroundColor:'rgba(247, 236, 225, 1)'}}>
      <AdvocateCard>
        <CandidateStatement>
          <SectionTitle style={{margin:'0'}}>
            <span>ADVOCATE</span>
            <h2>候選人主張</h2>
          </SectionTitle>
            <h3>我堅信 ! 藉由推動更完善的<strong>貓咪福利</strong>和相關政策，更是間接地投資於<strong>台灣的未來</strong>。</h3>
            <p>
              畢竟，民眾的身心健康與工作熱情是推動經濟的核心動力。透過完善的貓咪福利政策，為台灣的 GDP 經濟帶來巨大效益。<br />
              因此，我期望能在立法院內推進這些政策，確保每一隻貓咪都能得到他們應有的照顧，同時也為台灣的經濟發展助一臂之力。讓我們一同護航台灣的幸福經濟，從照顧每一隻貓咪開始。
            </p>
        </CandidateStatement>
        <CandidateImageFigure>
          <img src={CandidateImage} alt='候選人形象照'/>
        </CandidateImageFigure>
      </AdvocateCard>
    </SectionContainer>
  )
}

export default Advocate
