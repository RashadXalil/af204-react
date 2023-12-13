import React from 'react'
import { Helmet } from 'react-helmet'

const About = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>About Page</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <h1>About</h1>
        </div>
    )
}

export default About