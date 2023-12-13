import React from 'react'
import { Helmet } from "react-helmet";

const Home = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Murad Page</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div>Home</div>
        </div>
    )
}

export default Home