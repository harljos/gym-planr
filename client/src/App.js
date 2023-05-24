import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoggedOut from "./pages/LoggedOut";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route 
            path="/loggedout"
            element={<LoggedOut />}
          />
          <Route 
            path="/signup"
            element={<SignUp />}
          />
        </Routes>
      </div>
    </Router>     
  );
}

export default App;
