import axios from 'axios';
import { useState, useEffect } from 'react';

export const useFetch = (urlEnpoint) => {
    const [data, setData] = useState([]);
    async function fetchData() {
        const response = await axios.get(urlEnpoint);
        setData(response.data);
    }
    useEffect(() => {
        try {
            fetchData();
        } catch (e) {
            console.error(e);
        }
    }, []);
    return data;
};
