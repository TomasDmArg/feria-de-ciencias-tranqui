import React from 'react';
import { Wheel } from 'react-custom-roulette';

interface RuletaWheelProps {
  mustSpin: boolean;
  prizeNumber: number;
  data: Array<{ option: string; style: { backgroundColor: string; textColor: string } }>;
  onStopSpinning: () => void;
}

/**
 * Componente que representa la rueda de la ruleta
 */
const RuletaWheel: React.FC<RuletaWheelProps> = ({ mustSpin, prizeNumber, data, onStopSpinning }) => (
  <Wheel
    mustStartSpinning={mustSpin}
    prizeNumber={prizeNumber}
    data={data}
    onStopSpinning={onStopSpinning}
    outerBorderColor="#c9f9c6"
    radiusLineColor="#c9f9c6"
    pointerProps={{
      src: 'https://tmdm.com.ar/u/public/pointer_240701224435.svg',
      style: {
        rotate: '45deg',
      } 
    }}
    radiusLineWidth={3}
    spinDuration={0.7}
    fontFamily='Satoshi, sans-serif'
  />
);

export default RuletaWheel;