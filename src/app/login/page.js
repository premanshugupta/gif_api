'use client'
import React from 'react'
import  "bootstrap/dist/css/bootstrap.min.css"
import Link from 'next/link'
import { useState } from 'react';
import {useSignInWithEmailAndPassword} from 'react-firebase-hooks/auth'
import {auth} from '@/app/firebase/config'
import { useRouter } from 'next/navigation';
import Navbar from '../Navbar/page';

export default function Login() {
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
  const router = useRouter()

  const handleSignIn = async (event) => {
    event.preventDefault()
    try {
       
        const res = await signInWithEmailAndPassword(email, password);
        console.log({res});
        sessionStorage.setItem('user', true)
        setEmail('');
        setPassword('');
        router.push('/Navbar')
    }catch(e){
        console.error(e)
    }}
  return (
    <div>
       <div className="container mt-5 pt-5">
        <div className="row">
          <div className="col-12 col-sm-7 col-md-6 m-auto">
            <div className="card border-0 shadow">
              <div className="card-body">
               
                <form action="">
                    
                  <input
                    type="email" 
                    placeholder="Email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                  name="" id="" className="form-control my-4 py-2" />
                  <input 
                  type="password" 
                  placeholder="Password" 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)}
                   name="" id="" className="form-control my-4 py-2"  />
                  <div className="text-center mt-3">
                  
                    <button 
                      onClick={handleSignIn}
                    className="btn btn-dark m-2">Login</button>
                    <Link href="/signup">
                    Need to Register?
              </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
