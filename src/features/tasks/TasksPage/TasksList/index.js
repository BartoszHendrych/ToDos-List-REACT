import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { List, Item, Content, Button, StyledNavLink } from "./styled";
import { toggleTaskDone, selectHideDone,  removeTask, selectTaskByQuery } from "../../tasksSlice";
import searchQueryParamName from "../searchQueryParamName";

const TaskList = () => {
    const location = useLocation();
    const query = (new URLSearchParams(location.search)).get(searchQueryParamName);

    const tasks = useSelector(state => selectTaskByQuery(state, query));
    const hideDone = useSelector(selectHideDone);

    const dispatch = useDispatch();
    
    return (
        <List>
            {tasks.map(task =>(
                <Item 
                    hidden={task.done && hideDone}
                    key={task.id}
                >
                    <Button 
                        $toggleDone
                        onClick={() => dispatch(toggleTaskDone(task.id))}
                    >
                        {task.done ? "✔" : ""}
                    </Button>
                    <Content $done={task.done}>
                        <StyledNavLink to={`/zadania/${task.id}`}>{task.content}</StyledNavLink>
                    </Content>
                    <Button
                        $remove
                        onClick={() => dispatch(removeTask(task.id))}
                    >
                        🗑
                    </Button>
                </Item>
            ))}
        </List>
    )
};

export default TaskList;