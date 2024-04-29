//## 1: Import dependency (node_mpdules || package.json)
import React from "react";
import ReactDOM from "react-dom/client";

//## 2: Whrite Code

//React State : สภาวะของสิ่งใดสิ่งหนึ่ง (can be change/mainipulate)
//Reeact.useState(<initalState>)
//React State : Immutable (ห้ามแก้ไข,ห้ามเปลี่ยน)

//React : Function Component ทำหน้าที่ (render)return UI
function App() {
  // state  (1) ใส่ค่าตั้งงต้น  : Return value is Array

  let [count, setCount] = React.useState(0); // "-" is Undefined

  //Logic || Handle
  // const handleClick = (event) => {
  // console.log("Clicked", event.target);
  // return "5";
  const handleIncrease = (event) => {
    //***** เมื่อ click ให้ count + 1 ******
    setCount(count + 1);
  };
  const handleDecrease = (event) => {
    setCount(count - 1);
  };
  const handldeReset = (event) => {
    setCount(0);
  };
  //UI
  return (
    <div className="App">
      <h1>Hello React APP</h1>
      <button onClick={handleDecrease}>decrease</button>
      <button onClick={handldeReset}>reset</button>
      <button onClick={handleIncrease}>increase</button>
      <h2>count : {count}</h2>
      {/* <button onClick={(e)=>handleClick(e,1,2)}>Click</button>  
      e == event */}
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
