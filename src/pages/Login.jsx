import Input from "../components/Input";
import Cookies from "js-cookie";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useStateFunc } from "../assets/lib/context/useStateFunc";
import SmallLogo from "/imgs/marvelous.svg";
import Image from "../components/Image";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const { setToken } = useStateFunc();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_REACT_APP_URL}/appmarv/user/login`,
        {
          email: email,
          password: password,
        }
      );
      // console.log('response:', response);
      // console.log('response.data.token1:', response?.data?.token);
      if (response?.data?.token) {
        // console.log('response.data.token2:', response?.data?.token);
        Cookies.set("MarvLogin", response?.data?.token, { expires: 15 });
        setToken(response?.data?.token);
        navigate("/");
      }
      // console.log('email:', email, 'password:', password)
    } catch (error) {
      console.log("error:", error);
    }
  };

  return (
    <div className="boxLogin">
      <form onSubmit={handleSubmit}>
        <div className="btnCloseLogin">
          <Image src={SmallLogo} alt="logo Marvel" />
          <button
            onClick={() => {
              navigate("/");
            }}
          >
            X
          </button>
        </div>
        <Input
          id="email"
          type="email"
          placeholder="email@test.com"
          value={email}
          setState={setEmail}
          autoComplete="on"
        />
        <Input
          id="password"
          type="password"
          placeholder="password"
          value={password}
          setState={setPassword}
          autoComplete="on"
        />
        <Input type="submit" value="Se connecter" />
      </form>
      {errorMessage && <p className="red">{errorMessage}</p>}
    </div>
  );
};

export default Login;
