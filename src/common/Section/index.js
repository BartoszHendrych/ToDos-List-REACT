import { Wrapper, Header, Title, Body } from "./styled";

const Section = ({ title, body, extraHeaderContent, extraHeaderButton  }) => (
    <Wrapper>
        <Header>
            <Title>{title}</Title>
            {extraHeaderContent}
            {extraHeaderButton}
        </Header>
        <Body>
            {body}
        </Body>
    </Wrapper>
);

export default Section;