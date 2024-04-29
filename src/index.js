import ReactDOM from "react-dom/client";

function App() {
  return (
    <div className="App">
      <p>Hello React</p>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
