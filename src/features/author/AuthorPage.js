import Header from "../../common/Header";
import Section from "../../common/Section";
import { Wrapper } from "./styled";

const Author = () => (
    <Wrapper>
        <Header title="O autorze" />
        <Section
            title="Bartosz Hendrych"
            body={
                <>
                    <p>
                        Witaj na mojej stronie!
                    </p>
                    <p>
                        Jestem Bartek i chciałbym Cię serdecznie przywitać. 
                         <strong> Witaj w świecie front-endu, gdzie kod staje się sztuką, 
                        a strony internetowe nabierają życia!</strong> 🙂 
                    </p>
                    <p>
                        Od zawsze fascynowała mnie technologia i tworzenie wirtualnych światów. Moje marzenie to zostanie 
                        Programistą Front-Endu, aby tworzyć piękne, responsywne i interaktywne strony, które nie tylko przyciągają wzrok, 
                        ale także zapewniają użytkownikom niezapomniane wrażenia. 
                    </p>
                    <p>
                        Pozdrawiam, Bartek.
                    </p>             
                 

                </>
            }
        />
    </Wrapper>
);

export default Author;