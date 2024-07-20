import "./App.css";
import Places from "./components/screens/Places";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Places />
      </Router>
    </div>
  );
}

export default App;
