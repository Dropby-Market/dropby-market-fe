function Modal({ onClose, origin }) {
  return (
    <div className="modal-overlay">
        <div className="modal-content">
            <p className='py-2 text-[#4B5563] text-xs leading-4 font-medium'>{origin}</p>
            <button onClick={onClose} className='text-[#6B7280] text-xs leading-4 font-medium'>접기</button>
        </div>
    </div>
    );
}

export default Modal;