import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [heading, setHeading] = useState(" ");

  function handle(event) {
    console.log(event.target.value);
    setName(event.target.value);
  }

  function handleHeading(event) {
    setHeading(name);
    event.preventDefault();
  }

  return (
    <div className="container">
      <form onSubmit={handleHeading}>
        <h1>Hello {heading}</h1>
        <input type="text" placeholder="What's your name?" onChange={handle} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
