"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Header = () => {
  const [details, setDetails] = useState();
  const router = useRouter();
  const pathName = usePathname();

  useEffect(() => {

    const data = localStorage.getItem("userdata");
    if (!data && pathName=="/restaurant/dashboard") {//who not signup cannot access /dashboard page
      router.push("/restaurant");
    } else if (data && pathName == "/restaurant") {//who signup cannot access /restaurant page
      router.push("/restaurant/dashboard");
    } else {
      setDetails(JSON.parse(data));
    }

  },[]);

  const logout=()=>{
    localStorage.removeItem("userdata");
    router.push("/restaurant");
  }

  return (
    <div className="header-wrapper">
   
      <div className="logo">
        <img
          style={{ width: "100px" }}
          src="https://png.pngtree.com/template/20200610/ourmid/pngtree-food-delivery-logo-design-image_381319.jpg"
          alt="logo"
        />
      </div>

      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        {details && details.restoname ? (
          <>
            <li>
              <button onClick={logout}>Logout</button>
            </li>
            <li>
              <Link href="/">Profile</Link>
            </li>
          </>
        ) : (
          <li>
            <Link href="/">Login/signup</Link>
          </li>
        )}
      </ul>
      
    </div>
  );
};

export default Header;
