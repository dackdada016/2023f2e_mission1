import React from 'react'
import styled from 'styled-components'
import ArrowIcon from '../assets/images/arrow_forward.svg'
import MailBox from '../assets/images/mailBox.svg'
import DonateHand from '../assets/images/donate.png'
import { SectionContainer, SectionList, SectionContentButton } from './SectionStyle.js';

const DonateCard = styled.div`
  display: flex;
  padding: 6rem;
  flex-direction: column;
  gap: 1.5rem;
  flex: 1 0 0;
  border-radius: 2rem;
  background: rgba(218, 125, 74, 1);
  color: rgba(255, 255, 255, 1);
  h4{
    margin:0;
    font-family: Mantou Sans;
    font-size: 3.25rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  p{
    margin:0;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`
const FeedbackCard = styled(DonateCard)`
  background: rgba(51, 65, 85, 1);
`
const DonateImageContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap:0.5rem;
  div{
    img{
      height: 15rem;
      flex: 1 0 0;
    }
  }
`
const FeedbackImageContent = styled(DonateImageContent)`
  height: 14rem;
  div{
    img{
      width: 15rem;
      height: 10rem;
      flex-shrink: 0;
    }
  }
`

function SupportAndFeedback() {
  return (
    <SectionContainer>
      <SectionList>
        <DonateCard>
          <h4>小額支持喵喵</h4>
          <p>您的小筆捐款，是每隻毛孩未來的大大動力！</p>
          <DonateImageContent>
            <SectionContentButton>
              <p>小額捐款</p><img src={ArrowIcon} alt='ArrowIcon'/>
            </SectionContentButton>
            <div>
              <img src={DonateHand} alt='Donate' />
            </div>
          </DonateImageContent>
        </DonateCard>
        <FeedbackCard>
          <h4>民眾服務信箱</h4>
          <p>親愛的鄉親，每一位市民的意見都是我們社區前進的原動力</p>
          <FeedbackImageContent>
            <SectionContentButton>
              <p>填寫表單</p><img src={ArrowIcon} alt='ArrowIcon'/>
            </SectionContentButton>
            <div>
              <img src={MailBox} alt='MailBox' />
            </div>
          </FeedbackImageContent>
        </FeedbackCard>
      </SectionList>
    </SectionContainer>
  )
}

export default SupportAndFeedback