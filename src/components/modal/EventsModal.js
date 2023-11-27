import { useModal } from './ModalProvider'
import CancelButton from '../../assets/images/cancelbutton.svg'
import IconGrouo from '../icon/IconGrouo.js'
import { ModalBackdrop, ModalContainer, ModalContent, ModalImageSection, ModalTextContent, ModalTitle, MoreSection} from './ModalStyle.js'

function EventsModal({eventData, Id}) {

  const { closeModal } = useModal();

  const  dataContent = eventData
    .filter((item, index) => index !== Id)
    .map((item)=>{
      return(
        <div key={item.id}>
          <img src={item.imgSrc} alt={item.title} />
          <p>{item.title}</p>
        </div>
      )
    }
  );
  return (
    <ModalBackdrop>
      <ModalContainer>
        <ModalTitle>
          <h2>最新活動</h2>
          <button onClick={closeModal}><img src={CancelButton} alt='cancelbutton' /></button>
        </ModalTitle>
        <ModalContent>
          <ModalImageSection>
            <img src={eventData[Id].imgSrc} alt={eventData[Id].title} />
            <h5>{eventData[Id].title}</h5>
            <div>
              <p>分享</p>
              <IconGrouo/>
            </div>
          </ModalImageSection>
          <ModalTextContent>
            <div>
              <h2>{eventData[Id].title}</h2>
              <span>{eventData[Id].date}</span>
              <p>{eventData[Id].description}</p>
            </div>      
            <MoreSection>
              <p>更多活動</p>
              <div>
                {dataContent}
              </div>
            </MoreSection>
          </ModalTextContent>
        </ModalContent>
      </ModalContainer>
    </ModalBackdrop>
  )
}

export default EventsModal