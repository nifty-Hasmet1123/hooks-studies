const { useState, useEffect } = require("react")

const spanStyle = {
    marginLeft: "20px",
    color: "red",
    fontWeight: 700
}

const UseEffectTutorialPart3 = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        function interValFunction() {
            // always put condition on this or it will run to infinite counting
            if (count <= 30) {
                setCount(prevCount => prevCount + 1);
                console.log(`Interval function running. Countdown: ${count}`);
            } else {
                console.log(`Interval function has stopped...`);
            };
        };

        // set interval to 3seconds before the next count 
        const intervalID = setInterval(interValFunction, 1000);

        // put cleaner function return
        return () => clearInterval(intervalID);
    }, [ count ]);

    return (
        <div>
            <p>
                The current count is: 
                <span style={ spanStyle }>
                    { count }
                </span>
            </p>
        </div>
    );
}

export default UseEffectTutorialPart3;