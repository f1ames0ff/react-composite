import logo from "../logo.svg";
import React from "react";

export const template =
    <div className="app">
        <header className="app-header">
            <img src={logo}
                 className="app-logo"
                 alt="logo"/>

            <p>
                Edit <code>src/App.tsx</code> and save to reload.
            </p>

            <a
                className="app-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
            </a>
        </header>
    </div>