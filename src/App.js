import React, { useState } from "react";

function App() {
  const [text, setText] = useState(null);

  function NewText(val) {
    console.log(val.target.value);
    setText(val.target.value);
  }

  return (
    <div className="App">
      <h1>Get Input Box Value</h1>
      <input onChange={NewText} type="text" placeholder="Type here..." />
      <p style={{ background: "#111111", color: "#fff", padding: "1rem" }}>
        Input Value: {text}
      </p>
    </div>
  );
}

export default App;
