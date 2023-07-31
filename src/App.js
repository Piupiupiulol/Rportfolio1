
import './App.css';


import {BrowserRouter, Route, Navigate, Routes} from "react-router-dom";
import Login from "./login/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
              <Route path={"/"} exact element={<Login/>} />
              <Route path={"*"} element={<Navigate to={"/"} replace />} />
          </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
