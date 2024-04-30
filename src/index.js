import ReactDOM from "react-dom/client";
import React from "react";

//## Lab : 1
function App() {
  const [isShow, setIsShow] = React.useState(true);

  const handleClick = (event) => {
    setIsShow(false);
  };

  return (
    <>
      <button onClick={handleClick}>Click to hide me</button>
      {isShow ? <h2>Text</h2> : null}
    </>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
