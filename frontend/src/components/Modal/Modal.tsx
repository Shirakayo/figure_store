import React from 'react';
import style from './Modal.module.scss'

interface ModalProps {
    modalActive: boolean;
    setModalActive: (arg1: boolean) => void
    children: React.ReactNode
}

const Modal:React.FC<ModalProps> = ({modalActive, setModalActive, children}) => {
    return (
        <div onClick={() => setModalActive(false)} className={modalActive ? `${style.modal} ${style.active}` : style.modal}>
            <div onClick={e => e.stopPropagation()} className={modalActive ? `${style.content} ${style.content_active}` : style.content}>
                {children}
            </div>
        </div>
    );
};

export default Modal;
