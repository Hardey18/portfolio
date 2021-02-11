import React from 'react';
import { FaTimes } from 'react-icons/fa';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
    const outsideRef = React.useRef(null);

    const handleCloseOnOverlay = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        if (e.target === outsideRef.current) {
            onClose();
        }
    };

    return isOpen ? (
        <div>
            <div className={'modal'}>
                <div ref={outsideRef} className={'modal-overlay'} onClick={handleCloseOnOverlay} />
                <div className={'modal-box'}>
                    <button className={'modal-close'} onClick={onClose}>
                        {<FaTimes size={20} color="#1b1b32" />}
                    </button>
                    <div>
                        <h1>Thank you</h1>
                        <p>Your message has been submitted successfully</p>
                    </div>
                </div>
            </div>
        </div>
    ) : null;
};
