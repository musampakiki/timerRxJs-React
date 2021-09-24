import React from "react";
// import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
// import { ToastContainer } from "react-toastify";
// import GlobalStyle from "./styles/GlobalStyle";
import { darkTheme } from "./styles/Theme";
import Router from "./Router";
// import "react-toastify/dist/ReactToastify.css";
// import { createTheme } from '@material-ui/core/styles'


const App = () => {

    return (
        <ThemeProvider theme={ darkTheme }>
                {/*<GlobalStyle />*/}
                {/*<ToastContainer*/}
                {/*    autoClose={2500}*/}
                {/*    position="top-right"*/}
                {/*    closeButton={false}*/}
                {/*/>*/}
                <Router/>
        </ThemeProvider>
    );
};

export default App;
