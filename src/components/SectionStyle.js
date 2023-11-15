import styled from "styled-components";

export const SectionContainer = styled.section`
  display:flex;
  flex-direction:column;
  align-items: center;
  margin:auto;
  padding:40px 0;
  gap:1.5rem;
  background-color:rgba(255, 255, 255, 1);
`
export const SectionTitle = styled.div`
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

export const SectionList = styled.section`
  width: 80%;
  display:flex;
  flex-direction:column;
  justify-content: space-between;
  align-items:center;
  gap:1.5rem;
  @media (min-width: 993px) {
    flex-direction:row;
    align-items:center;
  }
`
export const SectionContentButton = styled.button`
  margin: auto 0;
  width: fit-content;
  padding: 1rem 1.5rem;
  border-radius: 500px;
  border: 1px solid rgba(255, 255, 255, 1);
  gap: 0.5rem;
  display:flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
    img{
      width: 1rem;
      height: 1rem;
    }
    p{
      text-wrap: nowrap;
      font-size: 1rem;
      line-height: normal;
      letter-spacing: normal;
      font-weight: 700;
      margin:0;
      color:rgba(51, 65, 85, 1);
    }
`