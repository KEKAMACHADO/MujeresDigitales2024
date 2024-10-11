import React, { useEffect } from 'react';
import { useConsejo } from './UseConsejo';
import divisorEscritorio from '../imagenes/pattern-divider-desktop.svg';
import divisorMovil from '../imagenes/pattern-divider-mobile.svg';
import dado from '../imagenes/icon-dice.svg';

export const ConsejoCard = () => {
    const { data, fetchConsejo } = useConsejo()

    useEffect(() => {
        fetchConsejo()
    }, [])

    return (
        <div className='tarjeta'>
            <p>CONSEJO #{data.id}</p>
            <h2>"{data.advice}"</h2>
            <img src={divisorEscritorio} className="divisor-escritorio" alt="divisor" />
            <img src={divisorMovil} className="divisor-movil" alt="divisor" />
            <div className="dado" onClick={fetchConsejo}>
                <img src={dado} alt="dado" />
            </div>
        </div>
    );
};

export default ConsejoCard
