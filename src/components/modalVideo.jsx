import Modal from 'react-bootstrap/Modal';
import ReactPlayer from 'react-player'
import "./stylesModalVideo.css"


const ModalVideo = ({show,handleClose}) => {
    return (
      <>
        <Modal dialogClassName='modal-dialog' show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title></Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ width:"auto"}}> <ReactPlayer url='https://www.youtube.com/watch?v=0ZUCKTc3p0o' width={"696px"} height={"392px"}/></Modal.Body>
        </Modal>
      </>
    );
  }

export default ModalVideo;