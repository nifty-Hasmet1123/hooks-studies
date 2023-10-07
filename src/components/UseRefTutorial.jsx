import { useEffect, useRef, useState } from "react"
// using useRef will not cause your component to reupdated/rerender when got changed
// unlike using useState

// using useRef only return 1 object which have a property of:
// current: <passed in argument in useRef>

const paraDivStyle = {
    padding: "10px",
    fontWeight: "700",
    color: "black",
    backgroundColor: "aliceblue",
    border: "none",
    borderRadius: "15px",
    width: "50vw",
    marginTop: "10px"
}

const UseRefComponent = () => {
    const [ name, setName ] = useState("");
    const renderCount = useRef(0); // you can use destructuring here { current }
    const focusOnInput = useRef();
    const generate = useRef();
    const lastStored = useRef("");
    
    const setNameEvent = (event) => {
        // incrementing the name variable per type of the user

        return setName(event?.target?.value);  
        // console.log(event?.target?.value);
        // console.log(event);
    };

    // the most important use case of useRef is hooking the useRef object to the `ref` attribute on any 
    // html tag

    const focus = () => {
        if (focusOnInput.current) {
            focusOnInput.current.focus();
        };
        
        // when using useRef like this do not destructure the `useRef` data to `current`

        // .focus is from document object, dom manipulation equivalent of this is 
        // const input = document.getElementById("myName")
        // input.focus();
        // this is only possible because `ref` is attached to the focusInput variable
        // see line `85`
    };

    // generate some text by clicking
    // attached on line 121
    const generateRef = () => {
        // made possible by attaching variable `generate` to `ref` attribute in line `96`

        if (generate.current) {
            generate.current.value = "Text generated from `Click me to generate`"
        };
    }
    
    useEffect(() => {
        // increment render count whenever there's a change 
        // in this component
        renderCount.current += 1;

        // use refhook to generate the last input of name state
        // instead of useState to avoid re-rendering.
        // using object assignment to the current state of name
        lastStored.current = name
    }, [name]);
    
    return (
        <div>
            <div>
                <h1>UseRef Tutorial</h1>
            </div>
            <div>
                <div>
                    <label htmlFor="myName">Howdy!: </label>
                    <input 
                        // assign the focusOnInput here to get this value when
                        // focus button is clicked using useRef and ref attribute of html
                        // when using ref always attached the useRef instance and not your
                        // modified function for event(such as onClick )
                        ref={focusOnInput}
                        id="myName"
                        value={name}
                        type="text"
                        onChange={setNameEvent}
                        placeholder="What's your name?"
                    />
                </div>
                <div>
                    <label htmlFor="someValue">Just click generate don't enter anything here: </label>
                    <input 
                        ref={generate}
                        style={{width: "270px"}}
                        id="someValue"
                        type="text" 
                        placeholder="Don't type anything here" 
                    />
                </div>
                <div>
                    <p>Last stored input was: {lastStored.current}</p>
                </div>
                <div style={paraDivStyle}>
                    <p 
                        style={{
                            fontSize: "large", 
                            textShadow: "2px 1px 1px grey",
                        }}
                    >
                        Hello {name}!
                    </p>
                    <span>UseRef Count: {renderCount.current}</span>
                </div>
                <div>
                    <button onClick={focus} style={{cursor:"pointer", marginRight: "10px"}}>
                        Focus on Howdy!
                    </button>
                    <button onClick={generateRef}>Click me to generate</button>
                </div>
            </div>
        </div>
    );
};

export default UseRefComponent;