import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Main } from "../components/Main";
import { Register } from "../containers/Register";
import { Login } from "../containers/Login";

export const Routes = (): JSX.Element => (
    <BrowserRouter>
        <React.Fragment>
            <Navbar />
            <Switch>
                <Route path="/register" component={Register} />
                <Route path="/login" component={Login} />
                <Route path="/main" component={Main} />
            </Switch>
        </React.Fragment>
    </BrowserRouter>
);




