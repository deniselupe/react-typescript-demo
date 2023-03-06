import { useState, useEffect } from 'react';
import axios from 'axios';

type Posts = {
    userId: number;
    id: number;
    title: string;
    body: string;
}[];

const FetchData = () => {
    const [posts, setPosts] = useState([] as Posts);

    useEffect(() => {
        const url = 'https://jsonplaceholder.typicode.com/posts';

        axios.get(url)
            .then(res => {
                console.log(res.data);
                setPosts(res.data);
            });
    }, []);

    return (
        <div>
            {
                posts.map((post) => {
                    return (
                        <div>
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                        </div>
                    );
                })
            }
        </div>
    );
};

export default FetchData;