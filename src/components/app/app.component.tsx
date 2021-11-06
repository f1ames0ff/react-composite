import logo from "../../logo.svg";
import './app.component.scss';
import React, {Dispatch, SetStateAction, useState} from "react";

class AtomicState<V extends unknown = unknown> {
    private readonly value: V;
    private readonly setter: Dispatch<SetStateAction<V>>;

    constructor(initialValue: V) {
        let [value, setter] = useState(initialValue);

        this.value = value;
        this.setter = setter;
    }

    get(): V {
        return this.value;
    }

    set(value: V): void {
        this.setter(value);
    }
}

export function AppComponent() {
    const count = new AtomicState(0);

    function incrementCounter() {
        count.set( count.get() + 1);
    }

    return <div className="app">
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

        <section>
            <button onClick={() => incrementCounter()}>
                increment
            </button>

            <h2>Count: </h2>
            <span>{count.get()}</span>
        </section>

    </div>
}
