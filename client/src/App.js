import React, { useContext, useEffect } from "react";
import axios from "axios";
import { TokenContext } from "./context/TokenContext";

function App() {
  const { accessToken, setAccessToken } = useContext(TokenContext);

  const handleLogout = () => {
    setAccessToken(null);
    window.localStorage.setItem("accessToken", accessToken);
  };

  useEffect(() => {
    axios
      .post("http://localhost:8000/sessions", {
        username: "zika",
        password: "1234",
      })
      .then((response) => {
        console.log(response.data.accessToken);
        setAccessToken(response.data.accessToken);
        window.localStorage.setItem("accessToken", accessToken);
        // console.log(accessToken);
      })
      .catch((error) => {
        if (error.response.status === 401) {
          console.log(`Invalid credentials!`);
          setAccessToken(null);
          window.localStorage.setItem("accessToken", accessToken);
          // console.log(accessToken);
        } else {
          console.log(error);
          setAccessToken(null);
          window.localStorage.setItem("accessToken", accessToken);
          // console.log(accessToken);
        }
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accessToken]);
  return (
    <div>
      App Works!
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default App;
