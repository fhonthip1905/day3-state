import ReactDOM from "react-dom/client";
import React from "react";

function App() {
  const [isShow, setIsshow] = React.useState(true);

  const handleClick = (event) => {
    setIsshow(false);
  };

  // const isShow = true;
  return
  <>
    {isShow ? (
      <button  onClick={handleClick}>
        Clck to hide me
      </button>
    ) : null}
  </>;
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
