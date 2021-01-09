import React, {useState} from "react";
import Nav from '../components/Nav/Nav';

const Auth = () => {
  const [isAuth, setAuth] = useState(false);

  return (
    <div>
    <h1> Auth page</h1>
    <Nav isAuth={isAuth} />
    <p>{isAuth? 'LOGGED IN' : 'NOT LOGGED IN'}</p>
    <button onClick={()=>{setAuth(!isAuth)}}>Login</button>
    </div>
  )
}

export default Auth; 