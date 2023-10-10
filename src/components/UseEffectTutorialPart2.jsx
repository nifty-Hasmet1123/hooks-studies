import { useEffect, useState } from "react";

const UseEffectTutorialPart2 = () => {
    const [ post, setPost ] = useState(null);
    const [ loading, setLoading ] = useState(true);
    
    useEffect(() => {
        async function fetchingData() {
            const fetchedData = await fetch("https://dummyjson.com/posts/1");
            const data = await fetchedData.json();
            setPost(data);
            setLoading(false);
        };
        fetchingData();
    }, [])

    return (
        <div>
            <h1>UseEffect Tutorial Part 2</h1>
            {
                loading ? <p>Loading...</p>:
                <>
                    <h1>{post.title}</h1>
                    <p>{post.body}</p>
                </>
            }
        </div>
    )
}

export default UseEffectTutorialPart2;

// second approach(not recommended)
// <article>
//     <h1>{post?.title}</h1>
//     <p>{post?.body}</p>
// </article>