/* SPDX-FileCopyrightText: 2026 Benjamin Ray Blaszczak */

import "./app.css";

import { Route, Switch } from "wouter";

import Welcome from "./components/welcome/welcome";
import WorkHistory from "./components/work-history/work-history";

export default function App() {
    return (
        <Switch>
            <Route path="/"><Welcome /></Route>
            <Route path="/history"><WorkHistory /></Route>
        </Switch>
    );
}