import React from "react";

// components
import UseStateComponent from './components/UseStateTutorial';
import UseEffectComponent from './components/UseEffectTutorial';
import UseMemoTutorial from './components/UseMemoTutorial';
import UseRefComponent from './components/UseRefTutorial';

class Main extends React.Component {
    render() {
        return (
            <main>
                <UseStateComponent />
                <UseEffectComponent />
                <UseMemoTutorial />
                <UseRefComponent />
            </main>
        );
    };
};

export default Main;