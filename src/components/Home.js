import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {

    return (
        <div id='home-page'>

            <h1>Home page</h1>
            <h2>Hi, my name is Siddharth </h2>
            <h2>and I work at <a href="https://www.newtonschool.co/">Newton School</a></h2>
           <button id="home-to-blog"> Go to Blog</button>
            <button id="home-to-info"> Go to Info</button>

        </div>
    )
}
export default Home