import Link from 'next/link';
import React from 'react'

const CustomerHeader = () => {
  return (
    <div className='header-wrapper'>
         
        <div >
        <img
          style={{ width: "100px" }}
          src="https://png.pngtree.com/template/20200610/ourmid/pngtree-food-delivery-logo-design-image_381319.jpg"
          alt="logo"
        />
        </div>
        <ul>
        <li> <Link href='/'>Home</Link> </li>
        <li> <Link href='/'>Login</Link> </li>
        <li> <Link href='/'>Sign up</Link> </li>
        <li> <Link href='/'>Cart(0)</Link> </li>
        <li> <Link href='/'>Add restaurant</Link> </li>
        </ul>
       
    </div>
  )
}

export default CustomerHeader;