import "./App.css";
import Contacts from "./components/Contacts";
import { Routes, Route } from "react-router-dom";
import Edit from "./components/Contacts/Edit";

function App() {
  return (
    <div className="App">
      <div id="container">
        <Routes>
          <Route exact path="/" element={<Contacts />}></Route>
          <Route path="/edit/:id" element={<Edit />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
