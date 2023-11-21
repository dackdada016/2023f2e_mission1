import styled from 'styled-components'

export const ModalBackdrop  = styled.div`
  background-color: rgba(0,0,0,0.8);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 500;
`

export const ModalContainer = styled.div`
  *{border:1px solid pink;}
  background-color:rgb(255,255,255);
  position: absolute;
  top: calc( 50% - 25rem );
  left:calc( 50% - 40rem );
  display: flex;
  flex-direction: column;
  width: 80rem;
  height: 50rem;
  border-radius: var(--spacer-24, 1.5rem);
  align-items: flex-start;
  gap: var(--spacer-32, 2rem);
  padding: var(--spacer-24, 1.5rem) var(--spacer-48, 3rem);
`
export const ModalContent = styled.section`
  display:flex;
  gap: 2rem;
`
export const ModalImageSection = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: var(--spacer-16, 1rem);
  img{
    width: 100%;
    height: auto;
    border-radius: var(--spacer-24, 1.5rem);
  }
  h5{
    align-self: stretch;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; 
  }
  div{
    display: flex;
    align-items: center;
    gap: var(--spacer-16, 1rem);
    align-self: stretch;
    justify-content: flex-start;
  }

`
export const ModalTextContent = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  div{
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    h2{
      color: var(--primary, #DA7D4A);
      align-self: stretch;
      font-family: Inter;
      font-size: 2rem;
      font-style: normal;
      font-weight: 700;
      line-height: 150%;
    }
    span{
      align-self: stretch;
      color: var(--gray-500, #64748B);
      font-size: 0.875rem;
      font-style: normal;
      font-weight: 400;
      line-height: 150%;
    }
    p{
      margin-bottom: 96px;
    }
  }
`
export const ModalTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  h2{
    font-size: 2rem;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
  }
  button{
    border:0;
    outline:0;
    background-color: transparent;
    cursor: pointer;
  }
`

export const MoreSection = styled.section`
  display:flex;
  flex-direction: column;
  padding: var(--spacer-16, 1rem);
  border-radius: var(--spacer-12, 0.75rem);
  background: var(--gray-50, #F8FAFC);
  gap: 1rem;
  p{
    align-self: stretch;
  }
  div{
    display:flex;
    flex-direction: row;
    div{
      display:flex;
      flex-direction: column;
      flex: 1 0 0;
      gap: 0.5rem;
      img{
        width:100%;
      }
      p{
        margin: 0;
      }
    }
  }
`