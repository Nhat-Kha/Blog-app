import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import Home from "./Home";

const Logout = (props) => {
  const [loggedOut, setLoggedOut] = useState(false);

  useEffect(() => {
    const logout = async () => {
      localStorage.removeItem("token");
      localStorage.removeItem("type");
      localStorage.removeItem("id");

      setLoggedOut(true);
    };

    logout();
  }, []);
  return <Navigate to="/" element={<Home />} />;
};

export default Logout;
