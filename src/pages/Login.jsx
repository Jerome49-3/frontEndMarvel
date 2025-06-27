import Input from '../components/Input';
import Cookies from 'js-cookie';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = ({ setToken }) => {
  // console.log(setToken)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    try {
      const response = await axios.post('https://site--marvbackend--s4qnmrl7fg46.code.run/user/login',
        // const response = await axios.post('http://localhost:3000/user/login',
        {
          email: email,
          password: password,
        }
      );
      // console.log('response:', response);
      // console.log('response.data.token1:', response?.data?.token);
      if (response.data.token) {
        // console.log('response.data.token2:', response?.data?.token);
        Cookies.set('MarvLogin', response.data.token, { expires: 15 });
        setToken(response.data.token);
        navigate("/")
      }
      // console.log('email:', email, 'password:', password)
    } catch (error) {
      console.log('error:', error);
    }
  }

  return (
    <div className='boxLogin'>
      <form onSubmit={handleSubmit}>
        <Input id="email" type="email" placeholder="email@test.com" value={email} setState={setEmail} autocomplete="on" />
        <Input id="password" type="password" placeholder="password" value={password} setState={setPassword} autocomplete="on" />
        <Input type="submit" value="Se connecter" />
      </form>
      {errorMessage && <p style={{ color: $redMarv }}>{errorMessage}</p>}
    </div>
  )
}

export default Login