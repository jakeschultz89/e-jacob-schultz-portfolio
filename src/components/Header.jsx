import React from "react";
import Typed from "react-typed";

const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="main-info">
                <h1>Full Stack Software Developer</h1>
                <Typed 
                    className="typed-text"
                    strings={["JavaScript", "ReactJS", "Python", "MongoDB", "Django", "Express", "PostgreSQL", "HTML", "Bootstrap"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                <a href="#" className="btn-main-offer">Contact Me</a>
            </div>
        </div>
    )
}

export default Header