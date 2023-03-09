import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        fetch(url)
            .then((res) => {
                if (!res.ok) {
                    throw new Error(
                        `HTTP error! status: ${res.status}`
                    );
                }
                return res.json();
            })
            .then((actualData) => {
                setData(actualData);
                setError(null);
                console.log(actualData);
            })
            .catch((error) => {
                setError(error.message);
                setData(null);
                console.log(error.message);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [url]);

    return { data, loading, error };
}

export default useFetch;