import { useDispatch } from "react-redux";
import { fetchExampleTasks } from "../taskSlice";
import { Wrapper, Button } from "./styled";

const Download = () => {
    const dispatch = useDispatch();

    return (
        <Wrapper>
            <Button onClick={()=> dispatch(fetchExampleTasks())}>
                Pobierz przykładowe zdania 
            </Button>
        </Wrapper>
    )
};  


export default Download;