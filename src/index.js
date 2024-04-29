import ReactDOM from "react-dom/client";
import React from "react";

//## Lab-1
// function App() {
//   const handleChange = (event) => console.log(event.target.value);
//   return <input onChange={handleChange} />;
// }

//## Lab-2
function App() {
  const handleSelect = (event) => console.log(event.target.value);
  return (
    <select onClick={handleSelect}>
      <option>Thailand</option>
      <option>England</option>
      <option>Argentina</option>
      <option>Portugal</option>
      <option>Spain</option>
    </select>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
