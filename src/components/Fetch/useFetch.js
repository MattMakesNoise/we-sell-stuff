import { useEffect, useState } from "react";

const useFetch = (url, options) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(url, options);
                if(!res.ok) {
                    throw new Error(
                        `HTTP error! status: ${res.status}`
                    );
                }
                const text = await res.text();
                try {
                    const data = JSON.parse(text);
                    setData(data);
                } catch (error) {
                    console.log('Failed to parse JSON: ', text, error);
                    throw error;
                }
                setLoading(false);
                setError(null);
            } catch (error) {
                setError(error.message);
                setData(null);
                setLoading(false);
            }
        };
        fetchData();
        // fetch(url)
        //     .then((res) => {
        //         if (!res.ok) {
        //             throw new Error(
        //                 `HTTP error! status: ${res.status}`
        //             );
        //         }
        //         return res.json();
        //     })
        //     .then((actualData) => {
        //         setData(actualData);
        //         setError(null);
        //         console.log(actualData);
        //     })
        //     .catch((error) => {
        //         setError(error.message);
        //         setData(null);
        //         console.log(error.message);
        //     })
        //     .finally(() => {
        //         setLoading(false);
        //     });
    }, [url]);

    return { data, loading, error };
}

export default useFetch;