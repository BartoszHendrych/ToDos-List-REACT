import styled from "styled-components";

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    background-color: #fff;
    border: none;

    @media(max-width:  ${({ theme }) => theme.breakpoint.mobile}px) {
        grid-template-columns: 1fr;
    }
`;

export const Button = styled.button`
    padding: 20px;
    border: none;
    color: hsl(180, 100%, 25%);
    background: transparent;

    &:hover {
        color: hsl(180, 100%, 40%);
        transition: 0.5s;
        cursor: pointer;
    }

    &:disabled {
        color: #ccc;
        cursor: not-allowed;
    }
`;

