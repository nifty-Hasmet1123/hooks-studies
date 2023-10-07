import { useEffect, useState } from "react";

// useEffect function accepts 2 arguments first: function, second: list of dependencies/states

const borderStyle = {
    border: "2px solid grey",
    padding: "10px",
    fontWeight: "700",
    cursor: "pointer",
}

// another example useEffect + dom manipulation
// const [ windowWidth, setWindowWidth ] = useState(window.innerWidth);

// const handleResize = () => {
//     setWindowWidth(window.innerWidth);
// }

// useEffect(() => {
//     // by adding this you will have dynamically updating the window size
//     window.addEventListener("resize", handleResize)
// }, [])

const UseEffectComponent = () => {
    const [ resource, setResource ] = useState("");
    const [ items, setItems ] = useState([]);

    // equivalent to componentDidMount in class-based lifecycle
    // useEffect accepts a second argument which is a list of  
    // state for example or options. so whenever the state of resource is change
    // just then it will execute the useEffect state
    // when clicking multiple times with the same button it will not print out
    // rendered anymore because it doesn't change.
    // when to use useEffect? when you want to have a side effect occurrence when your component mounts/unmounts
    // when a variable changes or when a prop changes when something updates
    useEffect(() => {
        // useEffect will opens happen when something changes 
        // like clicking on something on the browser

        // if you want to use async create a function inside here.
        // do not put asycn directly on the function parameter of useEffect
        async function fetchData() {
            // available endpoints:
            // https://jsonplaceholder.typicode.com/posts
            // https://jsonplaceholder.typicode.com/comments
            // https://jsonplaceholder.typicode.com/users
            
            if (!!resource) {
                const response = await fetch(`https://jsonplaceholder.typicode.com/${resource}`);
                const jsonResponse = await response.json();
                // console.log(`${resource}:`, jsonResponse);
                // setting the items to the state
                setItems(jsonResponse);
            };

            // useEffect cleanUp (important) (only accepts function)
            return () => {
                console.log("Cleanup")
            };
        };
        fetchData();

    }, [ resource ]);

    return (
        <div>
            <h1>UseEffect Tutorial(API fetch)</h1>
            <nav>
                <button 
                    style={borderStyle} 
                    onClick={ () => setResource("posts") }
                >
                    Posts
                </button>
                <button 
                    style={borderStyle} 
                    onClick={ () => setResource("users") }
                >
                    Users
                </button>
                <button 
                    style={borderStyle} 
                    onClick={ () => setResource("comments") }
                >
                    Comments
                </button>
                <button
                    style={borderStyle}
                    onClick={ () => {
                        setItems("");
                        setResource("");
                    }}    
                >
                    Clear all
                </button>
            </nav>
            <h1>
                { resource.charAt(0).toUpperCase() + resource.slice(1) } 
                { !!resource && `url link(https://jsonplaceholder.typicode.com/${resource})` }
            </h1>
            <div>
                {
                    items.length > 0 ? items.map((item, index) => {
                        // put key={index} always when iterating tags inside jsx file
                        return <pre key={index}>
                            { JSON.stringify(item) }
                        </pre>
                    }): null
                }
            </div>
        </div>
    );
};

export default UseEffectComponent;