import React, { useRef } from "react";

// A simple Input component using forwardRef
const Input = React.forwardRef((props, ref) => {
    return (
        <div>
        <input {...props} ref={ref} /> {/* Forward ref to the input element */}
        </div>
    );
    });

function App() {
    const inputRef = useRef(); // Create a ref

    const handleFocus = () => {
        inputRef.current.focus(); // This works because the ref is forwarded to the input element
    };

    return (
        <div>
        {/* Passing ref to Input component */}
            <Input ref={inputRef} placeholder="Enter your name" />
            <button onClick={handleFocus}>Focus Input</button>
        </div>
    );
}

export default App;

