import React, { useState } from "react";

/**
 * 
 * The useFlip hook for managing a boolean flip state.
 * 
 * @param {boolean} initState - initial state of the flip (true for facing up, false for facing down)
 * @returns - An array containing the current state and a function to toggle the state.
 */
const useFlip = (initState = true) => {
    const [state, setState] = useState(initState);
    const toggleState = () => {
        setState(state => !state);
    }
    return [state, toggleState];

}

export default useFlip;