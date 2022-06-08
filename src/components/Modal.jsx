import {HiXCircle} from 'react-icons/hi'

function Modal({openmodal, open}) {
    return (
        <div className="modal-visible">
            <div className='modal-content'>
                <HiXCircle onClick={() => openmodal(false)} className="close"/>
            </div>
        </div>
    )
}

export default Modal