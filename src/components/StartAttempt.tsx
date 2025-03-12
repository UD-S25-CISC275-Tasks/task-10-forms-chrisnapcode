import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [attempt_count, attempt_increment] = useState(4);
    const [inProgress, set_progress] = useState(false);

    const quizStart = () => {
        if (attempt_count > 0) {
            set_progress(true);
            attempt_increment(attempt_count - 1);
        }
    };
    const quizStop = () => {
        set_progress(false);
    };

    const mulligan = () => {
        attempt_increment(attempt_count + 1);
    };

    return (
        <div>
            <p>Number of Attempts: {attempt_count}</p>
            <Button
                variant="primary"
                onClick={quizStart}
                disabled={inProgress || attempt_count === 0}
            >
                Start Quiz
            </Button>
            <Button variant="primary" onClick={quizStop} disabled={!inProgress}>
                Stop Quiz
            </Button>
            <Button variant="primary" onClick={mulligan} disabled={inProgress}>
                Mulligan
            </Button>
        </div>
    );
}
