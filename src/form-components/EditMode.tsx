import React, { useState } from "react";
import Form from "react-bootstrap/Form";

export function EditMode(): React.JSX.Element {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    return (
        <div>
            <h3>Edit Mode</h3>
            {!editMode && (
                <p>
                    {name} is {!isStudent && "not"} a student{" "}
                </p>
            )}
            <Form.Check
                id="formEditMode"
                type="switch"
                label="Edit Mode"
                checked={editMode}
                onChange={() => {
                    setEditMode(!editMode);
                }}
            />
            {editMode && (
                <Form.Group controlId="formName">
                    <Form.Label>Name:</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter your name"
                        value={name}
                        onChange={(event) => {
                            setName(event.target.value);
                        }}
                    />
                </Form.Group>
            )}
            {editMode && (
                <Form.Group controlId="formIsStudent">
                    <Form.Check
                        type="checkbox"
                        label="Is Student"
                        checked={isStudent}
                        onChange={() => {
                            setIsStudent(!isStudent);
                        }}
                    />
                </Form.Group>
            )}
        </div>
    );
}
