import ReactDOM from "react-dom/client";
import React from "react";

//## Lab-1
// function App() {
//   const handleChange = (event) => console.log(event.target.value);
//   return <input onChange={handleChange} />;
// }

//## Lab-2
// function App() {
//   const handleSelect = (event) => console.log(event.target.value);
//   return (
//     <select onClick={handleSelect}>
//       <option>Thailand</option>
//       <option>England</option>
//       <option>Argentina</option>
//       <option>Portugal</option>
//       <option>Spain</option>
//     </select>
//   );
// }

//## Lab-3
// function App() {
//   const handleCheckbox = (event) =>
//     event.target.checked === true
//       ? console.log('name:'+(event.target.name),'value:'+(event.target.value),'Status:'+(event.target = "Tick"))
//       : console.log('name:'+(event.target.name),'value:'+(event.target.value),'Status:'+(event.target = "Untick"));
//   return (
//     <form>
//       <input
//         type="checkbox"
//         name="bike"
//         value="bike"
//         onChange={handleCheckbox}
//       />
//       <label> Bike</label>
//       <br />
//       <input
//         type="checkbox"
//         name="car"
//         value="car"
//         onClick={handleCheckbox}
//       />
//       <label> Car</label>
//       <br />
//       <input
//         type="checkbox"
//         name="boat"
//         value="boat"
//         onClick={handleCheckbox}
//       />
//       <label> Boat</label>
//       <br />
//     </form>
//   );
// }

//## Lab-4

function App() {
  const handleClick = (event) => {
    let isConfirm = window.confirm("Leave for Google");
    if (isConfirm === false) {
      event.preventDefault();
    }
  };
  return (
    <div>
      <a href="https://www.google.com/?hl=th" onClick={handleClick}>
        Go to Google
      </a>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
