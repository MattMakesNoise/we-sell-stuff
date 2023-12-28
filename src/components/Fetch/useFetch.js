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
    }, [url]);

    return { data, loading, error };
}

export default useFetch;