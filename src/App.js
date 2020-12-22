import React, { useDebugValue } from "react";

function Food({ fav }) {
  return <h3>I like {fav}</h3>;
}

function App() {
  return (
    <div>
      <h1>Hello!</h1>
      <Food fav="ramen" />
      <Food fav="pasta" />
    </div>
  );
}

export default App;
