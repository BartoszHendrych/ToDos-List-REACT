import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

export const StyledNavLink = styled(NavLink)`
    color: white;
    text-decoration: none;

    &.active{
        font-weight: bold;
    }
`;

export const List = styled.ul`
    margin: 0;
    padding: 0;
    display: flex;
    background-color: teal;
    justify-content: center;
    list-style: none;
`;

export const Item = styled.li`
    margin: 20px;
`;
