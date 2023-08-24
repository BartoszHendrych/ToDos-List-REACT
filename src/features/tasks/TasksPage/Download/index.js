import { useDispatch, useSelector } from "react-redux";
import { fetchExampleTasks, selectLoading } from "../../tasksSlice";
import { Wrapper, Button } from "./styled";

const Download = () => {
    const dispatch = useDispatch();
    const loading = useSelector(selectLoading);

    return (
        <Wrapper>
            <Button onClick={()=> dispatch(fetchExampleTasks())} 
                disabled={loading}
            >
                {
                    loading ? "Ładowanie zadań..." : "Pobierz przykładowe zdania"
                }
            </Button>
        </Wrapper>
    )
};  


export default Download;