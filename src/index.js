import ReactDOM from "react-dom/client";
import React from "react";

function App() {
  const [isShowbtn,setIsshowbtn] = React.useState(true);

  const handleClick =(event) =>{
    setIsshowbtn(false);
  };

 
  return 
  
        {isShow ? <button onClick={handleClick}>Click to hide me</button> : null}
    
  
  

}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
