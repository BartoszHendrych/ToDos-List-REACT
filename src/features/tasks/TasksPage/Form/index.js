import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { StyledForm, Button } from "./styled";
import { addTask } from "../../tasksSlice";
import { nanoid } from "@reduxjs/toolkit";
import Input from "../../Input";

const Form = () => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const inputRef = useRef(null);

    const dispatch = useDispatch();
    
    const focusInput = () => {
        inputRef.current.focus();
    };
    
    const onFormSubmit = (event) => {
        event.preventDefault();
        if(newTaskContent.trim() === "") {
            return;
        };

        dispatch(addTask({
            content: newTaskContent.trim(),
            done: false,
            id: nanoid(),
        }));

        setNewTaskContent("");
    };

    return (
        <StyledForm onSubmit={onFormSubmit}>
            <Input
                value={newTaskContent}
                autoFocus
                ref={inputRef}
                placeholder="Co jest do zrobienia?"
                onChange={({ target }) => setNewTaskContent(target.value)} 
            />
            <Button onClick={focusInput}>Dodaj zadanie</Button>
        </StyledForm>
    );
};

export default Form;