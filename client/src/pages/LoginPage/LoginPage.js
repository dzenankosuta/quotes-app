import React, { useContext, useState } from "react";
import axios from "axios";
import { TokenContext } from "../../context/TokenContext";
import { useNavigate } from "react-router-dom";
const LoginPage = () => {
  const navigate = useNavigate();
  const { setAccessToken } = useContext(TokenContext);
  const [userData, setUserData] = useState({ username: "", password: "" });

  const handleLogin = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8000/sessions", {
        username: userData.username,
        password: userData.password,
      })
      .then((response) => {
        console.log(response.data.accessToken);
        setAccessToken(response.data.accessToken);
        localStorage.setItem("accessToken", response.data.accessToken);
        navigate("/quotes");
        // console.log(accessToken);
      })
      .catch((error) => {
        if (error.response.status === 401) {
          console.log(`Invalid credentials!`);
          setAccessToken(null);
          localStorage.setItem("accessToken", null);
          //   console.log(accessToken);
        } else {
          console.log(error);
          setAccessToken(null);
          localStorage.setItem("accessToken", null);
          // console.log(accessToken);
        }
      });
  };
  return (
    <div>
      LoginPage
      <form method="POST">
        <input
          type="text"
          placeholder="username"
          value={userData.username}
          onChange={(event) =>
            setUserData((prev) => ({ ...prev, username: event.target.value }))
          }
          required
        />
        <input
          type="password"
          placeholder="password"
          value={userData.password}
          onChange={(event) =>
            setUserData((prev) => ({ ...prev, password: event.target.value }))
          }
          required
        />
        <button type="submit" onClick={handleLogin}>
          LOGIN
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
