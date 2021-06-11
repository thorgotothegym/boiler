import React, { useEffect, useState} from 'react';
import axios from 'axios';

export const Sensors = () => {
    const [sensors, setSensors] = useState<any>();

    const getSensors = async () => {
        const getToken = localStorage.getItem('data');
        console.log('gettoken', getToken);
        const headers = {
            Authorization: `Bearer ${getToken}`
        };
        await axios.get(`http://127.0.0.1:8000/api/v1/sensors/`, { headers: headers })
        .then(sensors => setSensors(sensors))
        .catch(error => console.log('error', error))
    }
    getSensors();
    useEffect( () => {}, [])
    return (
        <div>{JSON.stringify(sensors)}</div>
    )
}