import { Modal } from '../../context/Modal';
import { useState } from 'react';
import DeleteBusinessForm from './BusinessDeleteForm';

function DeleteBusinessModal ({ business }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className="deleteBusiness" onClick={() => setShowModal(true)}>
        Delete Business
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <DeleteBusinessForm  hideModal={() => setShowModal(false)} business={business} />
        </Modal>
      )}
    </>
  )
}

export default DeleteBusinessModal;
