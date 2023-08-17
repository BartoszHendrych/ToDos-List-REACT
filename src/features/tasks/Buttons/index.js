import { useSelector, useDispatch } from "react-redux";
import { Wrapper, Button } from "./styled";
import { selectTasks, toggleHideDone, selectHideDone, setAllDone } from "../tasksSlice";

const Buttons = () => {
    const { tasks } = useSelector(selectTasks);
    const hideDone = useSelector(selectHideDone);

    const dispatch = useDispatch();
    
    return (
        <Wrapper>
            {tasks.length > 0 && (
                <>  
                    <Button onClick={() => dispatch(toggleHideDone())}>
                        {hideDone ? "Pokaż" : "Ukryj"} ukończone
                    </Button>
                    <Button 
                        disabled={tasks.every(({ done }) => done)}
                        onClick={() =>  dispatch(setAllDone())}
                    >
                        Ukończ wszystkie
                    </Button>
                </>
            )}
        </Wrapper>
    )
};  


export default Buttons;