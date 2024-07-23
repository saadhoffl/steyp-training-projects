import "./App.css";
import Places from "./components/screens/Places";
import Place from "./components/screens/Place";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/screens/Login";
import Signup from "./components/screens/Signup";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Places />} />
          <Route path="/place/:id" element={<Place />} />
          <Route path="/auth/login/" element={<Login />} />
          <Route path="/auth/create/" element={<Signup />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
