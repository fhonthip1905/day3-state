import ReactDOM from "react-dom/client";
import React from "react";

function App() {
  const [isShow,setIsShow] = React.useState(true);

  const handleClick =(event) =>{
    setIsShow(false);
  };
  
  return <>{isShow ? <button onClick={handleClick}>Click to hide me</button> : null}</>;

}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
