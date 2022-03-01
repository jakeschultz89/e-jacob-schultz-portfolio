import React from 'react';
import proj1 from '../images/proj1.png';
import proj2 from '../images/proj2.png';
import proj3 from '../images/proj3.png';
import proj4 from '../images/proj4.png';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";

import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

const Portfolio = () => {

    // Proj 1
    const openPopupboxProj1 = () => {
        const content = (
            <>
                <img className="portfolio-image-popupbox" src={proj1} alt="proj 1 image" />
                <p>This is my first app. I built a trivia game based on software engineering trivia using HTML, CSS and JavaScript.</p>
                <b>GitHub: </b><a className="hyper-link" onClick={() => window.open("https://github.com/jakeschultz89/Software-Engineer-Interview-Simulator.git")}>https://github.com/jakeschultz89/Software-Engineer-Interview-Simulator.git</a>
            </>
        )
        PopupboxManager.open({ content })
    }

    const popupboxConfigProj1 = {
        titleBar: {
            enable: true,
            text: "Software Engineer Interview Simulator"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    // Proj 2
    const openPopupboxProj2 = () => {
        const content = (
            <>
                <img className="portfolio-image-popupbox" src={proj2} alt="proj 2 image" />
                <p>I built this app after being inspired Untappd (Social media app for beer reviews among friends) as a way to share video game reviews with friends. I intend to revisit this app and integrate more features.</p>
                <b>GitHub: </b><a className="hyper-link" onClick={() => window.open("https://github.com/jakeschultz89/iPlayed.git")}>https://github.com/jakeschultz89/iPlayed.git</a>
            </>
        )
        PopupboxManager.open({ content })
    }

    const popupboxConfigProj2 = {
        titleBar: {
            enable: true,
            text: "iPlayed"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    // Proj 3
    const openPopupboxProj3 = () => {
        const content = (
            <>
                <img className="portfolio-image-popupbox" src={proj3} alt="proj 3 image" />
                <p>A team built app - We used APIs from SpaceX to build an informational app where users can learn about SpaceX projects and also view an up-to-date tracker of multiple Starlink satelites. This project was built using ReactJS, NodeJS, Express and MongoDB.</p>
                <b>GitHub: </b><a className="hyper-link" onClick={() => window.open("https://github.com/brandonhall96/react-project-3.git")}>https://github.com/brandonhall96/react-project-3.git</a>
            </>
        )
        PopupboxManager.open({ content })
    }

    const popupboxConfigProj3 = {
        titleBar: {
            enable: true,
            text: "FakeX"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    // Proj 4
    const openPopupboxProj4 = () => {
        const content = (
            <>
                <img className="portfolio-image-popupbox" src={proj4} alt="proj 4 image" />
                <p>A team built app - We used Pygame to build a sidescrolling platform video game. The player takes on the role of a junior enlisted service member and must avoid getting caught by their superiors. We have some stretch goals for this game which include aspects such as having power-ups, improved graphics and a more structured storyline.</p>
                <b>GitHub: </b><a className="hyper-link" onClick={() => window.open("https://github.com/jakeschultz89/python-game.git")}>https://github.com/jakeschultz89/python-game.git</a>
            </>
        )
        PopupboxManager.open({ content })
    }

    const popupboxConfigProj4 = {
        titleBar: {
            enable: true,
            text: "Semper Skate"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    return (
        <div id="portfolio" className="portfolio-wrapper">
            <div className="container">
                <h1 className="text-uppercase text-center py-5">Projects</h1>
                <div className="image-box-wrapper row justify-content-center">
                    <div className="portfolio-image-box col-3" onClick={openPopupboxProj1}>
                    <img className="portfolio-image" src={proj1} alt="Software Engineer Interview Simulator" />
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                {/* - */}
                    <div className="portfolio-image-box col-3" onClick={openPopupboxProj2}>
                    <img className="portfolio-image" src={proj2} alt="iPlayed" />
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                </div>
                {/* - */}
                    <div className="portfolio-image-box col-3" onClick={openPopupboxProj3}>
                    <img className="portfolio-image" src={proj3} alt="FakeX" />
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                {/* - */}
                    <div className="portfolio-image-box col-3" onClick={openPopupboxProj4}>
                    <img className="portfolio-image" src={proj4} alt="Fakeflix" />
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                </div>
            </div>
        </div>
        <PopupboxContainer {...popupboxConfigProj1} />
        <PopupboxContainer {...popupboxConfigProj2} />
        <PopupboxContainer {...popupboxConfigProj3} />
        <PopupboxContainer {...popupboxConfigProj4} />
    </div>
    )
}

export default Portfolio;
