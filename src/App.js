import "./App.css";
import React from "react";
import RoutesAll from "./services/routes";
import { BrowserRouter } from "react-router-dom";

export default function App() {
    return (
        <BrowserRouter>
            <RoutesAll/>
        </BrowserRouter>
    );
}