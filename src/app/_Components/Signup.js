
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pconfirm, setPconfirm] = useState("");
  const [restoname, setRestoname] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");
  const router=useRouter();
  const [error, setError] = useState("");
  const [passworderror, setPassworderror] = useState("");
  

  const signuphandler = async () => {
    // console.log(email);
      
    if(password !== pconfirm){
      setPassworderror(true);
      return false;
    }
    else{
      setPassworderror(false)
    } 
    
    if(!email || !password || !restoname || !city || !address || !contact){
      setError(true)
      return false;
    }
    else{
      setError(false)
    }

    


     let response= await fetch("http://localhost:3000/api/restaurant",{
       method:"POST",
       body:JSON.stringify({email,password,restoname,city,address,contact})
     })

     response=await response.json();
     
     if(response.success)
     {
      const {result}=response;
      delete result.password;
      localStorage.setItem("userdata",JSON.stringify(result));
      router.push('/restaurant/dashboard');
     }else{
      alert("Registeration unsccessfull")
     }
    
  };

  return (
    <>
      <h1> signup </h1>


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

            error && !email && <span className="input-error">please enter email</span>

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
            passworderror && <span className="input-error">please enter valid password</span>
          }
          {

           error && !password && <span className="input-error">please enter password</span>

           }
          
        </div>

        <div className="input-upper">
          <input
            type="password"
            placeholder="Confirm password"
            className="input-field"
            value={pconfirm}
            onChange={(e) => setPconfirm(e.target.value)}
           
          />
           {
            passworderror && <span className="input-error">please enter valid password</span>
           }
           {

            error && !pconfirm && <span className="input-error">please enter password</span>

            }
           
        </div>

        <div className="input-upper">
          <input
            type="text"
            placeholder="Enter restaurant name"
            className="input-field"
            value={restoname}
            onChange={(e) => setRestoname(e.target.value)}
          />
           {

           error && !restoname && <span className="input-error">enter your restaurant name</span>

            }
        </div>

        <div className="input-upper">
          <input
            type="text"
            placeholder="Enter city"
            className="input-field"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
           {

            error && !city && <span className="input-error">enter your address city</span>

            }
        </div>

        <div className="input-upper">
          <input
            type="text"
            placeholder="Enter full address"
            className="input-field"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
           {

          error && !address && <span className="input-error">enter your address</span>

           }

        </div>

        <div className="input-upper">
          <input
            type="text"
            placeholder="Enter contact No."
            className="input-field"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
           {

            error && !contact && <span className="input-error">enter your contact</span>

           }
        </div>

        <div className="input-upper">
          <button className="button" onClick={signuphandler}>
            Signup
          </button>
        </div>
      </div>
    </>
  );
};

export default Signup;
