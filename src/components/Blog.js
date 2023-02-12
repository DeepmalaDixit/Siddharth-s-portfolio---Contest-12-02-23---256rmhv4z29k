import React from "react";
import { Link } from "react-router-dom";
const Blog = () => {


    return (
        <div id="blog-page">

            <h1>Blog page</h1>
            <h2>Checkout my awesome blogs </h2>
            <h3><a href='https://www.newtonschool.co/post/top-13-web-developer-interview-questions'>Web Development Interview questions</a></h3>
            <h3><a href='https://www.newtonschool.co/post/graph-data-structure-explained-with-examples'>Graph Data Structures</a></h3>
            <button id="blog-to-info"> <Link to="/Info">Go to Info</Link></button>
            <button id="blog-to-home"> <Link to="/">Go to Home</Link></button>
        </div>
    )
}
export default Blog
