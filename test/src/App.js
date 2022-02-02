import "./App.css";
import Link from "./Link";

function App() {
  const links = ["hello", "hi", "bye"];


  return (
    <div className="App">
      {links.map((ele,indx) =>
      <>
      <Link name={ele} /> 
      
      </> 
        
      )}
    </div>
  );
}

export default App;
