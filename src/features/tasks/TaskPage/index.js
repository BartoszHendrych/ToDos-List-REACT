import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import { Wrapper } from "../styled";
import { getTaskById } from "../tasksSlice";

function TaskPage() {
    const { id } = useParams();
    const task = useSelector(state => getTaskById(state, id));
    return (
        < Wrapper>
            <Header title="Szczegóły Zadania" />
            <Section
                title={task ? task.content : "Nie znaleziono zadania 😢"  }
                body={!!task && (
                    <>
                        <strong>Ukończone: </strong> {task.done ? "Tak" : "Nie"}
                    </>
                )}
            />
        </ Wrapper>
    );
};

export default TaskPage;
