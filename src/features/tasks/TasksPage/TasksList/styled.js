import { NavLink } from "react-router-dom";
import styled, { css }  from "styled-components";

export const List = styled.ul`
    list-style-type: none;
    padding: 0px;
    margin: 0px;
`;

export const Item = styled.li`
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-gap: 20px;
    border-bottom: 1px solid hsl(0, 0%, 80%);
    list-style-type: none;
    padding: 10px;
    align-items: center;

    ${({ hidden }) => hidden && css`
        display: none;
    `}
`;

export const Content = styled.span`
    ${({ $done }) => $done && css`
        text-decoration-line: line-through;
    `}
`;

export const Button = styled.button`
    width: 30px;
    height: 30px;
    background: hsl(0, 0%, 100%);
    margin: 0;
    border: none;
    cursor: pointer;
    color: hsl(0, 0%, 100%);

    ${({ $toggleDone }) => $toggleDone && css`
        background-color: hsl(120, 98%, 24%);

        &:hover {
            background-color: hsl(120, 98%, 30%);
        }
    `};

    ${({ $remove }) => $remove && css`
        background-color: hsl(0, 100%, 44%);

        &:hover {
            background-color: hsl(0, 100%, 55%);
        }
    `}
`;

export const StyledNavLink = styled(NavLink)`
    color: teal;
    text-decoration: none;
`;

