import "./App.css";
import Places from "./components/screens/Places";
import Place from "./components/screens/Place";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/screens/Login";
import Signup from "./components/screens/Signup";
import PrivateRoutes from "./utils/PrivateRoutes";
import React, { useState, useEffect } from "react";

export const UserContext = React.createContext();

function App() {
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);

  const updateUserData = (action) => {
    switch (action.type) {
      case "LOGOUT":
        setUserData(null);
        localStorage.removeItem("token");
        break;
      case "LOGIN":
        setUserData(action.payload);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    setUserData(JSON.parse(localStorage.getItem("token")));
    setLoading(false);
  }, []);

  return loading ? (
    <h1>Loading...</h1>
  ) : (
    <div>
      <UserContext.Provider value={{ userData, updateUserData }}>
        <Router>
          <Routes>
            <Route element={<PrivateRoutes />}>
              <Route path="/place/:id" element={<Place />} exact />
            </Route>
            <Route path="/" element={<Places />} />
            <Route path="/auth/login/" element={<Login />} />
            <Route path="/auth/create/" element={<Signup />} />
          </Routes>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
