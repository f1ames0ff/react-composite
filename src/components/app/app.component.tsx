import './app.component.scss';
import React from "react";
import {ContactsDbAdapter} from "../../adapters/contacts-db.adapter";
import {Link} from "react-router-dom";
import {ViewPortComponent} from "./components/view-port/view-port.component";


export const AppComponent = () => {
    ContactsDbAdapter.initDb();

    return <section className="app">
        <h1>App</h1>

        <Link to="/app">1</Link>
        <Link to="/tomorrow">2</Link>

        <ViewPortComponent/>

    </section>
}
