// two components in file

import { useEffect, useState } from "react"

const buttonStyle = {
    backgroundColor: "blue",
    padding: "4rem",
    color: "white",
    borderRadius: "10px",
    margin: "2em",
    fontSize: "large",
    fontWeight: 700,
    cursor: "pointer",
};

export default function UseEffectTutorialPart4() {
    const [ id, setId ] = useState(1);
    
    const handleClickButton = () => {
        const randomNumber = Math.floor(Math.random() * 100);
        setId(randomNumber);
    };

    return (
        <div>
            <button style={ buttonStyle } onClick={ handleClickButton }>
                Show me a different post
            </button>

            <PostBody id={ id } />
        </div>
    );
};

// second component using one useState
function PostBody(props) {
    const [postData, setPostData] = useState({
        text: "",
        isLoaded: false,
    })
    // destructuring
    const { text, isLoaded } = postData;

    useEffect(() => {
        // creating a new abort controller
        const controller = new AbortController();
        const signal = controller.signal;
    
        async function dataFetch() {
            // it's important to use try except block always when fetching data
            try {
                const response = await fetch(`https://dummyjson.com/posts/${ props.id }`, {
                    signal: signal
                });

                if (!signal.aborted) {
                    const data = await response.json();
                    setPostData({
                        text: data?.body,
                        isLoaded: true
                    });
                    // alternate syntax for setPostData
                    // setPostData(prevData => {
                    //     return {
                    //         ...prevData,
                    //         text: data?.body,
                    //         isLoaded: true,
                    //     };
                    // });
                };
            } catch (error) {
                console.error({"Uncaught Error Happened": error});
            } finally {
                controller.abort();
            }
        };
        // call the function here      
        dataFetch();
        
        // remember to abort the controller
        return () => controller.abort();
    }, [ props.id ])

    return (
        <div>
            {
                // uses the variables in postData from destructuring
                isLoaded ? <p> { text } </p>:
                <p>Loading...</p>
            }
        </div>
    );
};


// second component using seperate useState
// function PostBody(props) {
//     const [text, setText] = useState("");
//     const [ isLoaded, setIsLoaded ] = useState(false);

//     useEffect(() => {
//         async function dataFetch() {
//             const response = await fetch(`https://dummyjson.com/posts/${ props.id }`);
//             const data = await response.json();

//             setText(data.body);
//             setIsLoaded(true);
//         };

//         dataFetch();

//     }, [ props.id ])

//     return (
//         <div>
//             <h1>Text body</h1>
//             {
//                 isLoaded ? <p>{text}</p>:
//                 <p>Loading....</p>
//             }
//         </div>
//     )
// };