import React, { useState } from "react";
import Form from "react-bootstrap/Form";
export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    const [selectedOption, setSelectedOption] = useState<string>(options[0]);

    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Form.Group controlId="formMultipleChoice">
                <Form.Label>Choose an answer:</Form.Label>
                <Form.Select
                    value={selectedOption}
                    onChange={(e) => {
                        setSelectedOption(e.target.value);
                    }}
                >
                    {options.map((option: string) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            <p>{selectedOption === expectedAnswer ? "✔️" : "❌"}</p>
        </div>
    );
}
