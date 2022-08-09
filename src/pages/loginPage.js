import React, { useContext } from "react";
import { MoviesContext } from "../contexts/moviesContext";

const LoginPage = () => {
  const {authenticate } = useContext(MoviesContext);

  const login = () => {
    const password = Math.random().toString(36).substring(7);
    authenticate('user1', password);
  };

  return (
    <>
      <h2>Login page</h2>
      <p>You must log in to view the protected pages </p>
      {/* Login web form  */}
      <button onClick={login}>Submit</button>
    </>
    )
};

export default LoginPage;
