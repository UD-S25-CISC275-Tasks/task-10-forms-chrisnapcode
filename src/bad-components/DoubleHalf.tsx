import React, { useState } from "react";
import { Button } from "react-bootstrap";

function Doubler({
    setDhValue,
    dhValue
}: {
    setDhValue: (value: number) => void;
    dhValue: number;
}): React.JSX.Element {
    return (
        <Button
            onClick={() => {
                setDhValue(2 * dhValue);
            }}
        >
            Double
        </Button>
    );
}

function Halver({
    setDhValue,
    dhValue
}: {
    setDhValue: (value: number) => void;
    dhValue: number;
}): React.JSX.Element {
    return (
        <Button
            onClick={() => {
                setDhValue(0.5 * dhValue);
            }}
        >
            Halve
        </Button>
    );
}

export function DoubleHalf(): React.JSX.Element {
    const [dhValue, setDhValue] = useState<number>(10); // Moved state here

    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <Doubler setDhValue={setDhValue} dhValue={dhValue} />
            <Halver setDhValue={setDhValue} dhValue={dhValue} />
        </div>
    );
}
