import React, { useState } from "react";
import { Button } from "react-bootstrap";

// Holiday array (for easy indexing)
const holidays = [
    "🎄 Christmas",
    "🪔 Diwali",
    "🎃 Halloween",
    "🎆 Independence Day",
    "🎉 New Year"
];

// Mapping for alphabetical cycling
const alphabetOrder: Record<string, string> = {
    "🎄 Christmas": "🪔 Diwali",
    "🪔 Diwali": "🎃 Halloween",
    "🎃 Halloween": "🎆 Independence Day",
    "🎆 Independence Day": "🎉 New Year",
    "🎉 New Year": "🎄 Christmas"
};

// Mapping for year-based cycling
const yearOrder: Record<string, string> = {
    "🎉 New Year": "🎆 Independence Day",
    "🎆 Independence Day": "🎃 Halloween",
    "🎃 Halloween": "🪔 Diwali",
    "🪔 Diwali": "🎄 Christmas",
    "🎄 Christmas": "🎉 New Year"
};

export function CycleHoliday(): React.JSX.Element {
    const [currentHoliday, setHoliday] = useState(holidays[0]);

    const setByAlphabet = () => {
        setHoliday(alphabetOrder[currentHoliday]);
    };
    const setByYear = () => {
        setHoliday(yearOrder[currentHoliday]);
    };

    return (
        <div>
            <p>Holiday: {currentHoliday}</p>
            <Button variant="primary" onClick={setByAlphabet}>
                Advance by Alphabet
            </Button>
            <Button variant="secondary" onClick={setByYear}>
                Advance by Year
            </Button>
        </div>
    );
}
