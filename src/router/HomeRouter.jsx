import React from "react"
import Home from "../pages/Main"
import { createGlobalStyle } from 'styled-components';
import { useLocation } from 'react-router-dom';

const GlobalStyle = createGlobalStyle`
  body {
    overflow-y: ${(props) => (props.isSnap ? 'hidden' : 'auto')};
  }
`;
const HomeRouter = () => {
    const location = useLocation();
    const path = location.pathname;

    return (
        <>
            <GlobalStyle isSnap></GlobalStyle>
            <Home />
        </>
    )


}

export default HomeRouter