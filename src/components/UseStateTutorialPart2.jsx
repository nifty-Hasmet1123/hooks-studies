import { useState } from "react"

const mainContainerStyle = {
    display: "flex",
    gap: "3em"
    // justifyContent: "space-evenly"
};

const paraStyle = {
    backgroundColor: "aliceblue",
    padding: "0px 5px 0px 5px",
    borderLeft: "2px solid black",
    borderBottom: "2px solid black",
    display: "flex"
};

const paraStyle2 = {
    display: "none",
}

const formStyle = {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    gap: "10px",
    width: "35vw"
};

const divStyle2 = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "30px",
    // backgroundColor: hasNonEmptyFields ? "rgb(100, 0, 170)": "transparent",
    padding: "10px",
    borderRadius: "5px",
};

// helper function to determine css divStyle2 backgroundColor
// checks if atleast one of the form has an empty string
// returns boolean

// The every() method is a JavaScript array method that checks whether all elements in an array satisfy a specified condition. It iterates through the elements of the array and returns true if the provided condition is true for every element in the array. If any element fails the condition, it returns false.
// every method can be used by a iterable objects/arrays.
// every method accepts a function argument.
function hasNonEmptyFields(form) {
    return Object.values(form).every(value => value !== "");
    
    // alternate syntax:
    // const formArray = Object.values(form) // returns array of values from form object
    // return formArray.every(value => value !== ""); // returns true or false if all values are not equal to string
};

const UseStateTutorialPart2 = () => {
    // usage of useState many
    const [ form, setForm ] = useState({
        firstName: "", lastName: "",
        email: "", password: ""
    });

    // syntax readable for me.
    const handleEvent = (e) => {
        e.preventDefault();
    
        setForm(prev => {
            const { name, value } = e.target;
            const updatedObject = { ...prev };
            
            // when a object change it will fetch the name of that html tag
            // then assign the current value you inputed
            // this is more easy to read for me.
            // this is doing reassignment
            updatedObject[name] = value;
            return updatedObject;
        });

        // complex syntax for me
        // setForm(prev => {
        //     const key = e.target.name;
        //     const value = e.target.value;
        //     return {...prev, [ key ]: value};
        // });
    };
    
    return (
        <div style={mainContainerStyle}>
            <div>
                <h1>UseState Tutorial Part 2</h1>
                <form style={formStyle}>
                    {/**
                     * make sure the name attribute matches the key of the `form` state
                     */
                     }
                    <input type="text" placeholder="firstname" name="firstName" onChange={handleEvent}/>
                    <input type="text" placeholder="lastname" name="lastName" onChange={handleEvent}/>
                    <input type="text" placeholder="email" name="email" onChange={handleEvent}/>
                    <input type="text" placeholder="password" name="password" onChange={handleEvent}/>
                    {/* <input type="submit" value="Submit"/> */}
                    <button>Submit</button>
                </form>
            </div>
            <div 
                style={{
                    // added styling condition here
                    ...divStyle2,
                    backgroundColor: hasNonEmptyFields(form) ? "rgb(100, 0, 170)": "transparent"
                }}
            >
                {
                    // added conditional statement here for rendering the details
                    !!form.email && !!form.firstName && !!form.lastName && !!form.password
                    ? Object.entries(form).map(([key, value], index) => {
                        return <p style={ paraStyle } key={ index }>
                                    { key.toUpperCase() }: { value }
                                </p>
                    }): <p style={ paraStyle2 }></p>          
                }
            </div>
        </div>
    );
};

export default UseStateTutorialPart2;