import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";

function App() {
  return (
    <div>
      <Routes>
        <Route element={<Home></Home>} path="/"></Route>
      </Routes>
    </div>
  );
}

export default App;
