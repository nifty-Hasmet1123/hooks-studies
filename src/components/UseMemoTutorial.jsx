import { useEffect, useMemo, useState } from "react";

// use useMemo(memoziation) to store the data to cache
// instead of reevaluating the function data over again.
// useMemo function accepts 2 arguments, first: function, second: array of states/dependency

const mainContainerStyle = {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    width: "60px"
}

const UseMemoTutorial = () => {
    const [ isDarkTheme, setIsDarkTheme ] = useState(false);

    // using useMemo to only render this once if the theme
    // actually got change.
    // if not wrapped by useMemo, useEffect will still console.log("Theme change")
    // even though we haven't touch the darkmode/lightmode box
    const theme = useMemo(() => {
        // we will cache the theme(css) settings
        // this will preserve memory by reducing the amount of reduntant calculations
        return {
            marginTop: "10px",
            backgroundColor: isDarkTheme ? "black": "white",
            color: isDarkTheme ? "white": "black",
            border: isDarkTheme ? "2px solid red": "2px solid blue"
        };
    }, [isDarkTheme]);

    useEffect(() => {
        // when theme used memoization this will only print when themeBox is changed
        // unlike when theme is not using memoization the input number box when change
        // this will be printed even though you indicated the theme as the only list of dependencies without
        // memoization some parts may cause slowness in your application 
        // slowness in your application
        console.log("Theme changed")
    }, [theme]);

    return (
        <div style={mainContainerStyle}>
            <h1>UseMemo Tutorial</h1>
            <input type="number" placeholder="number toggle"/>
            <button
                style={theme}
                onClick={ () => setIsDarkTheme(prevStateThemeToggle => !prevStateThemeToggle) }
            >
                Darkmode/LightMode
            </button>
        </div>
    );
};

export default UseMemoTutorial;






///////////////  TOGGLE DARKMODE EXAMPLE USING MULTIPLE FUNCTION STATE /////////////////////////////////

// const UseMemoTutorial = () => {
//     // const [ number, setNumber ] = useState(0);
//     const [ defaultBackgroundColor, setDark ] = useState("black");
//     const [ defaultColor, setColor ] = useState("black");
//     const [ borderDefault, setBorderDefault ] = useState("2px solid black")
//     const theme = {
//         backgroundColor: defaultBackgroundColor ? "white": "black",
//         color: defaultColor ? "black": "white",
//         border: borderDefault ? "2px solid black": "2px solid blue"
//     }

//     return (
//         <div style={{display: "flex", flexDirection: "column", width: "fit-content", gap: "5px"}}>
//             <input type="number" placeholder="number input"/>
//             <button style={theme} onClick={ () => {
//                 // using multiple function on clicks there is another way where you will only
//                 // use boolean
//                 setDark(previousBackgroundColor => !previousBackgroundColor);
//                 setColor(previousColor => !previousColor);
//                 setBorderDefault(previosBorder => !previosBorder);
//             }} >Change Theme</button>
//             <div></div>
//         </div>
//     );
// }


// export default UseMemoTutorial;