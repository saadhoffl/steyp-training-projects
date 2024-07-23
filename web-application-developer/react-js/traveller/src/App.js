import "./App.css";
import Error404 from "./Error404";
import Places from "./components/pages/Places";
import Place from "./components/pages/Place";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup";
import PrivateRoutes from "./utils/PrivateRoutes";
import IndexPrivateRoutes from "./utils/IndexPrivateRoutes";
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
            <Route path="/" element={<Places />} />
            <Route element={<PrivateRoutes />}>
              <Route path="/place/:id" element={<Place />} exact />
            </Route>
            <Route element={<IndexPrivateRoutes />}>
              <Route path="/auth/login/" element={<Login />} exact />
              <Route path="/auth/create/" element={<Signup />} exact />
            </Route>
            <Route path="/*" element={<Error404 />} />
          </Routes>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
