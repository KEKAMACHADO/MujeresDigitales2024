import { useState } from 'react';
import axios from 'axios';

export const useConsejo = () => {
    const [data, setData] = useState({ id: 0, advice: '' })

    const fetchConsejo = async () => {
        try {
            const respuesta = await axios.get('https://api.adviceslip.com/advice')
            const datoConsejo = respuesta.data.slip;
            setData(datoConsejo)
        } catch (error) {
            console.error("Error al obtener el consejo", error)
        }
    }

    return { data, fetchConsejo }
}