import React from "react";

// components
// import UseStateComponent from './components/UseStateTutorial';
// import UseEffectComponent from './components/UseEffectTutorial';
// import UseMemoTutorial from './components/UseMemoTutorial';
// import UseRefComponent from './components/UseRefTutorial';
// import UseStateTutorialPart2 from "./components/UseStateTutorialPart2";
// import UseEffectTutorialPart2 from "./components/UseEffectTutorialPart2";
// import UseEffectTutorialPart3 from "./components/UseEffectTutorialPart3";
import UseEffectTutorialPart4 from "./components/UseEffectTutorialPart4";
import UseStateTutorialPart2 from "./components/UseStateTutorialPart2";

// const hrCss = {
//     position: "absolute",
//     border: "2px solid black",
//     width: "50vw",
// }

class Main extends React.Component {
    render() {
        return (
            <main>
                {/* <UseStateComponent />
                <hr style={hrCss} />
                <UseEffectComponent />
                <hr style={hrCss} />
                <UseMemoTutorial />
                <hr style={hrCss} />
                <UseRefComponent />
                <hr style={hrCss} />
                <UseStateTutorialPart2 />
                <hr style={hrCss} />
                <UseEffectTutorialPart2 /> */}
                {/* <UseEffectTutorialPart3 /> */}
                <UseEffectTutorialPart4 />
                <UseStateTutorialPart2 />
                
            </main>
        );
    };
};

export default Main;