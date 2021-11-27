import React from "react";
import {Route, Routes} from "react-router-dom";
import {AddContactComponent} from "./components/add-contact/add-contact.component";

export const ViewPortComponent = () => {
    return <Routes>
        <Route
            path="/add"
            element={<AddContactComponent/>}
        />

        <Route
            path="/add"
            element={<AddContactComponent/>}
        />
    </Routes>;
};
