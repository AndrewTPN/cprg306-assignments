"use client"

import { useState } from 'react';
import { useUserAuth } from "./_utils/auth-context";
import Link from 'next/link';




const Page = () => {


  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const handleLogin = async () => {
    await gitHubSignIn();
  }
 
  const handleLogout = async () => {
    await firebaseSignOut();
  }



  if(user) {
    return (
      
    
      <main>
        <h1>Shopping List App</h1>
          <p>
            Welcome, {user.displayName} ({user.email})
          </p>

          <div>
          <Link className='bg-slate-900 text-white p-1' href={"/week-10/shopping-list"}>Continue Shopping</Link>
          </div>
          <button className='border p-1 bg-red-700 text-white' onClick={handleLogout}>Log out</button>    
          
          
      </main>
      );
  } else {
    return <main>
      <h1>Shopping List App</h1>
          <button className='border p-1 bg-green-700 text-white' onClick={handleLogin}>Sign in with GitHub</button>    
    </main>
  }

};

export default Page;
