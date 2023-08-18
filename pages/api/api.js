import { useState, useEffect } from 'react';
import axios from 'axios';
const FormData = require('form-data');

export function useFetch(url) {
    const [data, setPost] = useState([]);
    let datos = new FormData();
    datos.append('id_empresa', '110');
    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: url,
        headers: {
            Cookie: 'ci_session_wms=ttnk3qcut2umbfgb24cqvgh9pc9q5bv3',
        },
        data: datos,
    };

    try {
        useEffect(async () => {
            await axios
                .request(config)
                .then((response) => setPost(response.data));
        }, []);
    } catch (error) {
        console.log(error.response.data.message), [];
    }

    return { data };
}
