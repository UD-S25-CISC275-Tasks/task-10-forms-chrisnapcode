import React, { useState } from "react";
import Form from "react-bootstrap/Form";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [answer, setAnswer] = useState<string>("");
    const [symbol, setSymbol] = useState<string>("❌");
    function setAnswerHandler(event: React.ChangeEvent<HTMLInputElement>) {
        const newAnswer = event.target.value;
        setAnswer(newAnswer);
        if (newAnswer === expectedAnswer) {
            setSymbol("✔️");
        } else {
            setSymbol("❌");
        }
    }
    return (
        <div>
            <h3>
                Check Answer: <span>{symbol}</span>
            </h3>
            <Form.Group controlId="formAnswer">
                <Form.Label>Answer:</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter answer"
                    value={answer}
                    onChange={setAnswerHandler}
                />
            </Form.Group>
        </div>
    );
}
