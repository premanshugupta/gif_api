'use client'
import React from 'react';
import  "bootstrap/dist/css/bootstrap.min.css"
import Link from 'next/link'
import Content from "../Content/page";

const Navbar = () => {
  return (
    <div>
      {/* navbar */}
      {/* <nav className="navbar navbar-expand-lg border-bottom border-body">
        <div className="container ">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center m-1" id="navbarSupportedContent">
            <form className="d-flex w-75" role="search">
              <input 
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-dark me-4" type="submit">
                Search
              </button>
              <Link href="/login">
              <button className="btn btn-outline-dark me-2 " type="submit">
              
              Login
              </button></Link>
              <Link href="/signup">
              <button className="btn btn-dark me-2" type="submit">
              
             Signup
              </button>
              </Link>
            </form>
          </div>
        </div>
      </nav> */}

      <Content />
     
    </div>
  );
};

export default Navbar;
