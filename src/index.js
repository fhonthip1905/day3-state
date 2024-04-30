import ReactDOM from "react-dom/client";
import React from "react";

function App() {
  const [isShow,setIsshow] = React.useState(false);

  const handleClick =(event) =>{
    setIsshow(!isShow)
  };

 
  return (
    <>
        <button onClick={handleClick}> {isShow ? 'Hide' : 'Show'} </button>
        {isShow && <h2>Hello</h2> } 
    </>
  
  )

}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
