import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): React.JSX.Element {
    const COLORS = [
        "red",
        "blue",
        "green",
        "orange",
        "purple",
        "cyan",
        "magenta",
        "black"
    ];

    const [color, setColor] = useState<string>(COLORS[0]);

    return (
        <div>
            <h3>Change Color</h3>
            {COLORS.map((clr) => (
                <Form.Check
                    inline
                    key={clr}
                    type="radio"
                    name="color-radio"
                    id={`color-${clr}`}
                    label={clr}
                    value={clr}
                    onChange={(e) => {
                        setColor(e.target.value);
                    }}
                    checked={color === clr}
                    style={{
                        backgroundColor: clr,
                        padding: "2px 6px",
                        borderRadius: "4px",
                        marginRight: "8px",
                        color: clr === "black" ? "white" : "black"
                    }}
                />
            ))}
            <div
                data-testid="colored-box"
                style={{
                    backgroundColor: color,
                    color: color === "black" ? "white" : "black",
                    padding: "10px",
                    marginTop: "10px",
                    width: "fit-content"
                }}
            >
                You have chosen {color}.
            </div>
        </div>
    );
}
