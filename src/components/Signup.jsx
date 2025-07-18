import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Input from "./Input";
import Image from "./Image";
import SmallLogo from "/imgs/marvelous.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Cookies from "js-cookie";
import { useStateFunc } from "../assets/lib/context/useStateFunc";

const SignUp = ({ show, setShow }) => {
  const { faEye, faEyeSlash, setToken } = useStateFunc();
  console.log("faEye:", faEye, "faEyeSlash:", faEyeSlash);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState("password");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleType = () => {
    setType(type === "password" ? "text" : "password");
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_REACT_APP_URL}/appmarv/user/signup`,
        {
          username,
          email,
          password,
        }
      );
      // console.log('response1:', response)
      if (response) {
        // console.log('response after if:', response)
        Cookies.set("MarvLogin", response.data.token, { expires: 15 });
        // console.log('response.data.token:', response.data.token);
        setToken(response.data.token);
        // console.log('token:', token);
        setShow(false);
        // console.log('show:', show);
        navigate("/");
      }
    } catch (error) {
      console.log("error", error.response);
    }
  };

  return (
    <div className="boxModal">
      <div className="boxModalContent">
        <div>
          <Image src={SmallLogo} alt="logo Marvel" />
          <button
            onClick={() => {
              {
                show === true ? setShow(false) : null;
              }
            }}
          >
            X
          </button>
        </div>
        <form onSubmit={handleSubmit} className="boxForm">
          <Input
            value={username}
            inputId="username"
            type="text"
            placeholder="Username"
            setState={setUsername}
            autoComplete="on"
          />
          <Input
            value={email}
            inputId="email"
            type="email"
            placeholder="Email"
            setState={setEmail}
            autoComplete="on"
          />
          <div className="boxPsswd">
            <Input
              value={password}
              inputId="password"
              type={type}
              placeholder="Mot de passe"
              setState={setPassword}
              autoComplete="on"
            />
            <div className="boxIcons">
              <FontAwesomeIcon
                icon={faEye}
                onClick={handleType}
                className={type !== "password" ? "hide" : null}
              />
              <FontAwesomeIcon
                icon={faEyeSlash}
                onClick={handleType}
                className={type !== "text" ? "hide" : null}
              />
            </div>
          </div>
          <Input type="submit" value="S'inscrire" />
        </form>
        {errorMessage && <p className="red">{errorMessage}</p>}
      </div>
    </div>
  );
};

export default SignUp;
