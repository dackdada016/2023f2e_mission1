import styled from "styled-components"

const EventCardList = styled.div`
  display:flex;
  justify-content: center;
  gap: 1rem; 
  width: 100%;
  cursor: pointer;
  div:first-child{
    width: 30%;
    img{
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }
  div{
    display: flex;
    flex-direction:column;
    gap: 0.5rem;
    flex: 1 0 0;
    span{
      color:rgba(148, 163, 184, 1);
    }
    h5{
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
`
function EventsList({children, onClick}) {
  return (
    <EventCardList onClick={onClick}>
      {children}
    </EventCardList>
  )
}

export default EventsList