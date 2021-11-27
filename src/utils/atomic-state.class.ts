import {Dispatch, SetStateAction, useState} from "react";

export class AtomicState<V extends unknown = unknown> {
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
