import React from 'react';
import { motion } from 'framer-motion';
import { QRCodeSVG } from 'qrcode.react';
import { Cancel01Icon } from 'hugeicons-react';

interface ModalProps {
    showModal: boolean;
    toggleModal: () => void;
    modalContent: 'qr' | 'result';
    result: string;
}

/**
 * Componente Modal que muestra el código QR o el resultado
 */
const Modal: React.FC<ModalProps> = ({ showModal, toggleModal, modalContent, result }) => {
    if (!showModal) return null;

    return (
        <motion.div
            className="fixed flex flex-col inset-0 bg-[#FFFDD1] backdrop-blur bg-opacity-90 items-center justify-center z-50 p-8 rounded-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.1 }}
            onClick={toggleModal}
        >
            <div className='flex flex-col items-center justify-center' onClick={(e) => e.stopPropagation()}>
                {modalContent === 'qr' ? (
                    <>
                        <h2 className="text-2xl text-[#11382A] font-bold mb-12">Escanea el código QR para descargar Tranqui</h2>
                        <QRCodeSVG value="https://tranqui.mdp.edu.ar" type='rounded' bgColor='#FFFDD100' size={200} />
                    </>
                ) : (
                    <h2 className="text-2xl text-[#11382A] font-bold mb-12">{result}</h2>
                )}
                <button
                    className="flex flex-row items-center justify-center gap-3 fixed bottom-[30px] px-4 py-2 bg-[#45FFBD] text-[#11382A] font-bold hover:bg-[#00de8f] w-[300px] min-h-[57px] rounded-[24px] text-lg"
                    onClick={toggleModal}
                >
                    Cerrar <Cancel01Icon /> 
                </button>
            </div>
        </motion.div>
    );
};

export default Modal;