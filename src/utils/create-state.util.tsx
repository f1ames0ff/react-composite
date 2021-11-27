import React, {Dispatch, SetStateAction, useState} from "react";

interface ComponentStateItem<T> {
    getter?: T;
    setter: Dispatch<SetStateAction<T | undefined>>;
}

export interface ComponentState {
    [key: string]: ComponentStateItem<unknown>
}

export function useDefaultState<T>(defValue: T | undefined = undefined): ComponentStateItem<T> {
    const [getter, setter] = useState(defValue);
    return {getter, setter};
}
