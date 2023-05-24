import Login from "./pages/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route 
            path="/loggedout"
            element={<Login />}
          />
        </Routes>
      </div>
    </Router>     
  );
}

export default App;
