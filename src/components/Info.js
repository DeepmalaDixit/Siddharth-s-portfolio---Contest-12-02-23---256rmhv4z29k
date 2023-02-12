import React from "react";
import { Link } from "react-router-dom";

const Info = () => {


    return (
        <div id="info-page">


            <h1> Info page </h1>
            <h2>I am born in India</h2>
            <h2>and I like to play Cricket </h2>
             <button id="info-to-blog"> <Link to="/blog">Go to Blog</Link></button>
            <button id="info-to-home"> <Link to="/">Go to Home</Link></button>
        </div>
    )
}
export default Info
