import React from 'react'
import styled from 'styled-components'
import { SectionContainer, SectionTitle } from './SectionStyle.js';

// const AdvocateSection = styled.section`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background-color:rgba(247, 236, 225, 1);
// `
// const AdvocateCard = styled.div`
//   margin: 6.25rem 300px;
//   display: flex;
//   width:100%;
//   justify-content: center;
//   gap: 1.5rem;
//   border-radius: 2rem;
//   background-color:rgba(255, 255, 255, 1);
// `;

// const CandidateStatement = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 2rem;
//   justify-content: space-between;
//   align-items: center;
//   span{
//     font-weight: 600;
//     padding: 0.5rem 0.75rem;
//     border-radius: 0.5rem;
//     background: rgba(51, 65, 85, 1);
//     color:rgba(255, 255, 255, 1);
//   }
//   h2{
//     margin: 0;
//     font:400 4rem 'Mantou Sans';
//     background: -webkit-linear-gradient(45deg, #E6793B 1.54%, #FF4185 97.86%);
//     -webkit-background-clip: text;
//     -webkit-text-fill-color: transparent;
//     color: transparent;
//     line-height: 93px;
//   }
//   h3{
//     margin: 0;
//     font-size : 1.75rem;
//     word-break: break-all;
//     font-weight: 700;
//     line-height: 34px;
//   }
//   p{
//     font-size: 18px;
//     font-weight: 400;
//     line-height: 27px;
//   }
// `

const CandidateImageFigure = styled.div`
  width: 100%;
  height: 100%;
  max-height: 648px;
  background: url('../assets/images/candidateImage.png');
`

function Advocate() {
  return (
    <SectionContainer>
      {/* <AdvocateCard> */}
        <SectionTitle>
          <span>ADVOCATE</span>
          <h2>候選人主張</h2>
          <h3>我堅信 ! 藉由推動更完善的貓咪福利和相關政策，更是間接地投資於台灣的未來。</h3>
          <p>
            畢竟，民眾的身心健康與工作熱情是推動經濟的核心動力。透過完善的貓咪福利政策，為台灣的 GDP 經濟帶來巨大效益。<br />
            因此，我期望能在立法院內推進這些政策，確保每一隻貓咪都能得到他們應有的照顧，同時也為台灣的經濟發展助一臂之力。讓我們一同護航台灣的幸福經濟，從照顧每一隻貓咪開始。
          </p>
        </SectionTitle>
        <CandidateImageFigure />
      {/* </AdvocateCard> */}
    </SectionContainer>
  )
}

export default Advocate