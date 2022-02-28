import {useEffect, useState} from "react";
import {Post} from "../types/post";


const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

const ClientSideRendering = () => {
    const [data, setData] = useState<Post | undefined>(undefined)
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then((response) => response.json())
            .then(async (data) => {
                await delay(3000)
                setData(data);
                setLoading(false);
            });
    }, [])

    return (
        <div>
            {isLoading ? <p>Loading...</p> : <p>{JSON.stringify(data)}</p>}
        </div>
    );
};

export default ClientSideRendering;
