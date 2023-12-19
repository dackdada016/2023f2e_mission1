import styled from "styled-components"


const Card = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: var(--spacer-16, 1rem);
  @media (max-width: 576px) {
    width: 100%;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
  @media (min-width: 993px) {
    width: 50%; 
  }
  img{
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: 8px;
  }
  div {
    display: flex;
    padding-top: var(--spacer-16, 16px);
    flex-direction: column;
    width: 100%;
    height: 15.0625rem;
    gap: var(--spacer-8, 0.5rem);
    span{
      color:rgba(148, 163, 184, 1);
    }
    h5{
      font-size:1.25rem;
      margin:0;
    }
  }

`

function EventCard({ cardContent: { imgSrc, date, title, description } }) {
  return (
    <Card>
      <img src={imgSrc} alt={title}/>
      <div>
        <span>{date}</span>
        <h5>{title}</h5>
        <p>{description}</p>
      </div>
    </Card>
  )
}

export default EventCard