import { Route, Routes, Navigate } from "react-router-dom";
import Register from "./components/Register";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Login from "./components/Login";
import { useEffect, useState } from "react";

function App() {
  const [token, setToken] = useState(null);
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState("");
  const [logged, setLogged] = useState(false);
  const [data, setData] = useState({
    firstName: "",
    email: "",
    password: "",
  });

  const showPassword = () => {
    setShowPass((prev) => !prev);
  };

  useEffect(() => {
    if (token) {
      sessionStorage.setItem("token", JSON.stringify(token));
    }
  }, [token]);

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      const data = JSON.parse(sessionStorage.getItem("token"));
      setToken(data);
      setLogged(!!data);
    }
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/register"
          element={
            <Register
              showPass={showPass}
              setShowPass={setShowPass}
              data={data}
              setData={setData}
              showPassword={showPassword}
              error={error}
              setError={setError}
            />
          }
        />

        {token && <Route
          path="/home"
          element={logged ? <Home token={token} /> : <Navigate to="/" replace />}
        />} 


        <Route
          path="/"
          element={
            <Login
              setToken={setToken}
              showPass={showPass}
              setShowPass={setShowPass}
              data={data}
              setData={setData}
              showPassword={showPassword}
              error={error}
              setError={setError}
            />
          }
        />

        <Route path="*" element={<NotFound logged={logged} />} />
      </Routes>
    </div>
  );
}

export default App;
