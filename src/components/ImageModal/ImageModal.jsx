import style from './ImageModal.module.css';
import ReactModal from 'react-modal';

ReactModal.setAppElement('#root');
const modalStyle = {
  overlay: { backgroundColor: 'rgba(0, 0, 0, 0.5)' },
  content: {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'transparent',
    height: '100%',
    border: 'none',
  },
};

export const ImageModal = ({ closeModal, content }) => {
  return (
    <>
      <ReactModal
        isOpen={true}
        onRequestClose={closeModal}
        shouldCloseOnEsc={true}
        style={modalStyle}
      >
        <img
          className={style.image}
          src={content.urls.regular}
          alt={content.alt_description}
          width={'100%'}
          height={'100%'}
        />
      </ReactModal>
    </>
  );
};
