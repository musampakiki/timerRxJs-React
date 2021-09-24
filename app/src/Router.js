import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch,
} from "react-router-dom";


// styles
import Container from "./styles/Container";

// components
import Home from "./components/Timer";


const AppRouter = () => (


    <Router>
        <Container>
            <Switch>
                <Route path="/" component={Home}/>
                <Redirect to="/"/>
            </Switch>
        </Container>
    </Router>
);

export default AppRouter;