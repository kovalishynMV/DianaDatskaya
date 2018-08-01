import React from 'react';
import Header from "./header/Header.js"
import About from "./about/About.js"
import Contact from "./contact/Contact.js"

class Home extends React.Component {
    render() {
        return (
            <div className="top">
                <Header />
                <div className="bg" />
                <About />
                <Contact />
            </div>
        );
    }
}

export default Home;