import { useState, useEffect } from "react";

export default function useFetch(url, initial) {
    const [data, setData] = useState(initial);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch(url)
            .then((resp) => resp.json())
            .then((data) => {
                setLoading(false);
                setData(data);
            });
    }, [url]);

    return { data, loading, setData };
}