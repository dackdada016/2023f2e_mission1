import { useModal } from './ModalProvider'
import CancelButton from '../../assets/images/cancelbutton.svg'
import IconGrouo from '../icon/IconGrouo.js'
import { ModalBackdrop, ModalContainer, ModalContent, ModalImageSection, ModalTextContent, ModalTitle, MoreSection} from './ModalStyle.js'

function PolicuIssuesModal({policuIssiesData, Id}) {

  const { closeModal } = useModal();

  const  dataContent = policuIssiesData
    .filter((item, index) => index !== Id)
    .map((item)=>{
      return(
        <div key={item.id}>
          <img src={item.imgSrc} alt={item.cardTitle} style={{borderRadius:"0.5rem"}}/>
          <p>{item.description}</p>
        </div>
      )
    }
  );
  return (
    <ModalBackdrop>
      <ModalContainer>
        <ModalTitle>
          <h2>政策議題</h2>
          <button onClick={closeModal}>
            <img src={CancelButton} alt='cancelbutton' />
          </button>
        </ModalTitle>
        <ModalContent>
          <ModalImageSection>
            <img src={policuIssiesData[Id].imgSrc} alt={policuIssiesData[Id].cardTitle} />
            <h5>{policuIssiesData[Id].cardTitle}</h5>
            <div>
              <p>分享</p>
              <IconGrouo/>
            </div>
          </ModalImageSection>
          <ModalTextContent style={{width:"100%"}}>
            <div>
              <h2>{policuIssiesData[Id].cardTitle}</h2>
              <p style={{margin:"0"}}>{policuIssiesData[Id].description}</p>
              <p style={{marginBottom:"64px"}}>{policuIssiesData[Id].content}</p>
            </div>
            <MoreSection>
              <p>更多政策議題</p>
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

export default PolicuIssuesModal