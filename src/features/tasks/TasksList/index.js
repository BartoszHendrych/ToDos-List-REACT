import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { List, Item, Content, Button } from "./styled";
import { selectTasks, selectTaskDone, selectHideDone,  removeTask} from "../taskSlice";

const TaskList = () => {
    const tasks = useSelector(selectTasks);
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
                        onClick={() => dispatch(selectTaskDone(task.id))}
                    >
                        {task.done ? "✔" : ""}
                    </Button>
                    <Content $done={task.done}>
                        {task.content}
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