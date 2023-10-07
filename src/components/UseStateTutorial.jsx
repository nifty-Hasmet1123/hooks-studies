import { useState } from 'react';

// just css styles
const myStyle = {
    width: "100px",
    height: "50px",
    padding: "0",
    marginTop: "1px",
    fontWeight: "700"
}

const divStyle = {
    display: "flex",
    justifyContent: "space-evenly",
    flexDirection: "column",
    gap: "15px"
    // alignItems: "center",
}

const mainContainerStyle = {
    display: "flex",
    gap: "10px",
    // justifyContent: "space-evenly"
}

const spanStyle = {
    marginTop: "13px",
    fontWeight: "700"
}

// NOTE USESTATE ALSO ACCEPTS FUNCTION AS A PARAMETER
// WHERE IT CAN RENDER IT ONLY ONCE
// EXAMPLE //
// const [ initialValue, setInitialValue ] = useState(() => {
//     console.log("will only rendered once");
//     return 0;
// });

function UseStateComponent() {
    // useState always returns a initialVariable and a setFunction
    const [ initialValue, setInitialValue ] = useState(0);
    const [ currentTheme, setTheme ] = useState("blue");

    const changeTheme = (event) => {
        setTheme(event.target.value);
        // setTheme(previousTheme => event.target.value);
    };
    
    const onEnterDown = (event) => {
        return event.key === "Enter" && changeTheme(event);
    };

    const incrementCount = () => {
        // using function setState (recommended)
        // which will correctly fetch the previous state 
        setInitialValue(previousCount => {
            return previousCount + 1
        });
    };

    // const incrementCount2 = () => {
        // using non function (not recommended)
        // causes unexpected behaviour
    //     setInitialValue(initialValue + 1)
    // }

    const decrementCount = () => {
        setInitialValue(previousCount => previousCount - 1);
    };

    return (
        <div style={divStyle}>
            <h1 style={{display: "flex", flexDirection: "flex-start", alignItems:"flex-start", margin: "0px"}}>UseState Tutorial</h1>
            <h4>press enter after changing the `changing theme input`</h4>
            <div style={mainContainerStyle}>
                <button style={myStyle} onClick={decrementCount}> - </button>
                <span style={spanStyle}> {initialValue} {currentTheme} </span>
                <button style={myStyle} onClick={incrementCount}> + </button>
            </div>
            <div>
                <label htmlFor="changeTheme">Change theme: </label>
                <input 
                    type="text" 
                    id="changeTheme" 
                    placeholder={`${currentTheme}: enter after color input`}
                    onKeyDown={onEnterDown}
                    // onChange={changeTheme}
                />
            </div>
        </div>
    );
}

export default UseStateComponent;
