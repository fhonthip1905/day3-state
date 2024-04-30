import ReactDOM from "react-dom/client";
import React from "react";

function App() {
  const [isShow,setIsshow] = React.useState(true);
  const handleClick =() =>{

  };
 const isShow = false;
  return (
    <>
        <button onClick={handleClick} >Click to hide</button>
        <h2>Text</h2>
    </>
  
  )

}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
