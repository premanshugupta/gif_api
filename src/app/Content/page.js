"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation"; // Use useRouter for navigation
import  "bootstrap/dist/css/bootstrap.min.css"
import Link from 'next/link'

const Content = () => {
  const [query, setQuery] = useState("");
  const [gifs, setGifs] = useState([]);
  const [offset, setOffset] = useState(0);
  const limit = 3; // This is a constant, so it's fine to not use `useState` for it

  const GIPHY_API_KEY = "GlVGYHkr3WSBnllca54iNt0yFbjz7L65";
  const GIPHY_API_URL = "https://api.giphy.com/v1/gifs/search";
  const router = useRouter(); // Use `useRouter` hook for redirection

  const searchGifs = async (url) => {
    try {
      const response = await axios.get(url, {
        params: {
          api_key: GIPHY_API_KEY,
          q: query,
          offset,
        },
      });
      const newGifs = response.data.data.map((gif) => ({
        id: gif.id,
        url: gif.images.fixed_height.url,
        title: gif.title,
      }));
      if (offset === 0) {
        setGifs(newGifs);
      } else {
        setGifs((prevGifs) => [...prevGifs, ...newGifs]);
      }
    } catch (error) {
      console.error("Oops, something went wrong!", error);
    }
  };

  useEffect(() => {
    if (query !== "") {
      searchGifs(GIPHY_API_URL);
    }
  }, [query, offset]);

  const handleSearch = () => {
    setOffset(0);
    searchGifs(GIPHY_API_URL);
  };

  const handleNext = () => {
    setOffset(offset + limit);
  };

  const handlePrevious = () => {
    if (offset >= limit) {
      setOffset(offset - limit);
    }
  };

  const handleSignOut = async () => {
    await signOut();
    router.push("/signin"); // Use `router.push` for redirection
  };

  return (
    <>
    <nav className="navbar navbar-expand-lg border-bottom border-body">
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
                type="text"
                placeholder="Search for GIFs"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <button
              onClick={handleSearch}
              className="btn btn-outline-dark me-4" type="submit">
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
      </nav>
      <div>
      <div className="container text-center mt-5">
  <div className="row">
    <div className="col border p-5">
    {gifs.slice(offset, offset + limit).map((gif) => (
              <img
                key={gif.id}
                src={gif.url}
                alt={gif.title}
                className="w-1/3 p-2 rounded-lg"
              />
            ))}
    </div>
  </div>
</div>

<div className="flex flex-wrap justify-center rounded-lg overflow-hidden">
            {gifs.slice(offset, offset + limit).map((gif) => (
              <img
                key={gif.id}
                src={gif.url}
                alt={gif.title}
                className="w-1/3 p-2 rounded-lg"
              />
            ))}
          </div>


      </div>
    </>
  );
};

export default Content;
