import ReactDOM from "react-dom/client";
import React from "react";

//## Lab-1
function App() {
  const handleChange = (event) => console.log(event.target.value);
  return <input onChange={handleChange} />;
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
