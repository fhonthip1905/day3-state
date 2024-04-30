import ReactDOM from "react-dom/client";
import React from "react";

function App() {
  const [isShow,setIsshow] = React.useState(true);

  const handleClick =(event) =>{
    setIsshow(!isShow)
  };

 
  return (
    <>
        <button onClick={handleClick}> Click to hide me </button>
    </>
  
  )

}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
