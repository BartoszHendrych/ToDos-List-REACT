import styled from "styled-components";

export const StyledForm = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 20px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        grid-template-columns: 1fr;
    }
`;

export const Button = styled.button`
    font-family: 'Roboto', sans-serif;
    background: hsl(180, 100%, 25%);
    color: hsl(0, 0%, 100%);
    border: none;
    cursor: pointer;
    padding: 10px;
    transition: 1s;

    &:hover {
        background: hsl(180, 100%, 35%);
        transform: scale(1.2);
    }
`;
