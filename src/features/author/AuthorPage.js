import Header from "../../common/Header";
import Section from "../../common/Section";
import { Wrapper } from "./styled";

const Author = () => (
    <Wrapper>
        <Header title="O autorze" />
            <Section
                title="Bartosz Hendrych"
                body={
                    <>Nana</>
                }
            />
    </Wrapper>
);

export default Author;