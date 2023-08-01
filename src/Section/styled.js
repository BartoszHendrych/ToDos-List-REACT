import styled from "styled-components";

export const Wrapper = styled.section`
    background-color: hsl(0, 0%, 100%);
    margin: 20px auto;
`;

export const Header = styled.header`
    display: grid;
    grid-template-columns: 1fr auto auto;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        grid-template-columns: 1fr;
    }
`;

export const Title = styled.h2`
    padding: 20px;
    margin: 0;
`;

export const Body = styled.div`
    border-top: 1px solid hsl(0, 0%, 80%);
    padding: 20px;
`;
