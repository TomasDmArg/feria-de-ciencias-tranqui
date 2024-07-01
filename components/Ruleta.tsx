'use client';
import React, { useState } from 'react';
import { QrCode01Icon } from 'hugeicons-react';
import { motion } from 'framer-motion';
import RuletaWheel from './RuletaWheel';
import Modal from './Modal';
import { PRIZES } from '@/constants/prizes';

/**
 * Componente principal de la Ruleta
 */
export default function Ruleta() {
    const [mustSpin, setMustSpin] = useState(false);
    const [prizeNumber, setPrizeNumber] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState<'qr' | 'result'>('qr');
    const [result, setResult] = useState('');

    /**
     * Maneja el clic en el botón de girar
     */
    const handleSpinClick = () => {
        if (!mustSpin) {
            const randomNumber = Math.random();
            let newPrizeNumber;

            if (randomNumber < 0.7) {
                const stickerIndices = PRIZES.reduce((indices, item, index) =>
                    item.option === 'Sticker' ? [...indices, index] : indices, [] as number[]);
                newPrizeNumber = stickerIndices[Math.floor(Math.random() * stickerIndices.length)];
            } else {
                const llaveroIndices = PRIZES.reduce((indices, item, index) =>
                    item.option === 'Llavero' ? [...indices, index] : indices, [] as number[]);
                newPrizeNumber = llaveroIndices[Math.floor(Math.random() * llaveroIndices.length)];
            }

            if (typeof newPrizeNumber === 'number' && !isNaN(newPrizeNumber)) {
                setPrizeNumber(newPrizeNumber);
                setMustSpin(true);
            } else {
                console.error('Error: No se pudo seleccionar un premio válido');
            }
        }
    };

    /**
     * Alterna la visibilidad del modal
     */
    const toggleModal = (content: 'qr' | 'result' = 'qr') => {
        setModalContent(content);
        setShowModal(!showModal);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-[#FFFDD1]">
            <motion.section
                className='flex flex-col items-center justify-start gap-3 mb-6'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.1 }}
            >
                <img src='https://tranqui-v2-six.vercel.app/logo.svg' alt="Logo" />
                <p className='text-[#11382A]'>
                    Probá suerte girando la ruleta y gana un premio
                </p>
            </motion.section>

            <RuletaWheel
                mustSpin={mustSpin}
                prizeNumber={prizeNumber}
                data={PRIZES}
                onStopSpinning={() => {
                    setMustSpin(false);
                    setResult(`¡Ganaste un ${PRIZES[prizeNumber].option}!`);
                    toggleModal('result');
                }}
            />

            <motion.section
                className='mt-4 flex flex-row items-center justify-center gap-3'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.1 }}
            >
                <button
                    className="px-4 py-2 bg-[#45FFBD] text-[#11382A] font-bold hover:bg-[#00de8f] w-[300px] min-h-[57px] rounded-[24px] text-lg"
                    onClick={handleSpinClick}
                >
                    Probar suerte
                </button>
                <button onClick={() => toggleModal('qr')}>
                    <QrCode01Icon color='#11382A' size={30} />
                </button>
            </motion.section>

            <Modal
                showModal={showModal}
                toggleModal={toggleModal}
                modalContent={modalContent}
                result={result}
            />
        </div>
    );
}