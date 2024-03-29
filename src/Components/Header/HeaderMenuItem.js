import styled from 'styled-components'
import React from "react";
import { useHistory, Link } from "react-router-dom";

const ListItem = styled.li`
    display:inline-block;
    a {
        color: #4C4C4C;
        padding: 0px 10px;
        text-align: right;
        text-decoration: none;
        font-family: 'Raleway', sans-serif;
        font-weight:500;
    
        :visited {
            color: #4C4C4C;
            text-decoration: none;
        }
    
        :hover {
            color:black;
        }
    }
`

export const HeaderMenuItem = ({menu_item_title, path}) => {

    
    return (
        <ListItem><Link to={path}> {menu_item_title}</Link></ListItem>
    );

};
    