import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div>
            <Button variant="primary" onClick={toggleVisibility}>
                Reveal Answer
            </Button>
            {isVisible && <p>42</p>}
        </div>
    );
}
