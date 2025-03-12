import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    const [leftValue, set_left] = useState(1);
    const [rightValue, set_right] = useState(2);
    const rollLeft = () => {
        set_left(d6());
    };

    const rollRight = () => {
        set_right(d6());
    };

    let message = null;
    if (leftValue === rightValue) {
        message = leftValue === 1 ? <p>Way to Lose!</p> : <p>That is a Win!</p>;
    }

    return (
        <div>
            {message}

            <span data-testid="left-die">Left is: {leftValue} </span>
            <Button variant="primary" onClick={rollLeft}>
                Roll Left Die
            </Button>

            <span data-testid="right-die">Right is: {rightValue} </span>
            <Button variant="primary" onClick={rollRight}>
                Roll Right Die
            </Button>
        </div>
    );
}
