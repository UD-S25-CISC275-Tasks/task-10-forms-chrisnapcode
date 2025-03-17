import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import React, { useState } from "react";

export function GiveAttempts(): React.JSX.Element {
    const [attempts_left, attempt_increment] = useState(3);
    const [attemps_requested, request_increment] = useState(0);

    return (
        <div>
            <h3>Give Attempts</h3>
            <Button
                variant="primary"
                onClick={() => {
                    attempt_increment(attempts_left - 1);
                }}
                disabled={attempts_left <= 0}
            >
                Use
            </Button>
            <Button
                variant="primary"
                onClick={() => {
                    attempt_increment(attemps_requested + attempts_left);
                    request_increment(0);
                }}
            >
                gain
            </Button>
            <Form.Group controlId="formAttempts">
                <Form.Label>Attempts:</Form.Label>
                <Form.Control
                    type="number"
                    placeholder="Enter requested attempts"
                    value={attemps_requested}
                    onChange={(event) => {
                        if (!isNaN(Number(event.target.value)))
                            request_increment(Number(event.target.value));
                    }}
                />
            </Form.Group>
            <p>Attempts Left: {attempts_left}</p>
        </div>
    );
}
