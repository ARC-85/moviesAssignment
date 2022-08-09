import React, { useContext } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { AuthContext } from "./authContext";

const Header = () => {
  const { token, signout } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <>
      {token ? (
        <p>
          Welcome! <button onClick={() => signout()}>Sign out</button>
        </p>
      ) : (
        <p>
          You are not logged in{" "}
          <button onClick={() => navigate("login")}>Login</button>
        </p>
      )}



    </>
  );
};

export default Header;
