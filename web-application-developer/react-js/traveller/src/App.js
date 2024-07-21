import "./App.css";
import Places from "./components/screens/Places";
import Place from "./components/screens/Place";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Places />} />
          <Route path="/place/:id" element={<Place />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
