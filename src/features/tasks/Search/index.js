import { Wrapper } from "./styled";
import searchQueryParamName from "../TasksPage/searchQueryParamName";
import Input from "../Input";
import { useQueryParameters, useReplaceQueryParameters } from "../../tasks/TasksPage/queryParameters";

const Search = () => {
    const query = useQueryParameters(searchQueryParamName);
    const replaceQueryParameters = useReplaceQueryParameters();
    
    const onInputChange = ({ target }) => {
        replaceQueryParameters({
            key: searchQueryParamName,
            value: target.value.trim() !== "" ? target.value : undefined,
        });
    };

    return (
        <Wrapper>
            <Input
                placeholder="Filtruj zadania"
                value={query || ""}
                onChange={onInputChange}
            />
        </Wrapper>
    )
};

export default Search; 