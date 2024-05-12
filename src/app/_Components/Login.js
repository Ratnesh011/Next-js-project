import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();
   const router=useRouter();
  const loginhandler=  async ()=>{
    if(!email || !password){
      setError(true);
      return false;
    }else{
      setError(false);
    }

    let response=await fetch("http://localhost:3000/api/restaurant",{
      method:"POST",
      body:JSON.stringify({email,password,login:true})

    });
    response=await response.json();

    if(response.success){
      
      const {result}=response;
      delete result.password;
      localStorage.setItem("userdata",JSON.stringify(result));
       router.push('/restaurant/dashboard');
    }else{
      alert("login failed")
    }

  }
  return (
    <>
      <h1> Login </h1>

      <div>
        <div className="input-upper">
          <input
            type="text"
            placeholder="Enter email"
            className="input-field"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {
            error && !email && <span className="input-error">enter email</span>
          }
        </div>

        <div className="input-upper">
          <input
            type="password"
            placeholder="Enter your password"
            className="input-field"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {
            error && !password && <span className="input-error">enter password</span>
          }
        </div>

        <div className="input-upper">
          <button className="button" onClick={loginhandler}>Login</button>
        </div>
      </div>
    </>
  );
};

export default Login;
