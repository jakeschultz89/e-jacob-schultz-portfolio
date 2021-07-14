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
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur repudiandae quos magnam dicta sint iusto soluta dolore similique, ipsum necessitatibus? Totam expedita hic sint architecto. Commodi, explicabo quo. Illo, tenetur.</p>
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
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur repudiandae quos magnam dicta sint iusto soluta dolore similique, ipsum necessitatibus? Totam expedita hic sint architecto. Commodi, explicabo quo. Illo, tenetur.</p>
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
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur repudiandae quos magnam dicta sint iusto soluta dolore similique, ipsum necessitatibus? Totam expedita hic sint architecto. Commodi, explicabo quo. Illo, tenetur.</p>
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
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur repudiandae quos magnam dicta sint iusto soluta dolore similique, ipsum necessitatibus? Totam expedita hic sint architecto. Commodi, explicabo quo. Illo, tenetur.</p>
                <b>GitHub: </b><a className="hyper-link" onClick={() => window.open("https://github.com/brandonhall96/fakeflix.git")}>https://github.com/brandonhall96/fakeflix.git</a>
            </>
        )
        PopupboxManager.open({ content })
    }

    const popupboxConfigProj4 = {
        titleBar: {
            enable: true,
            text: "Fakeflix"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    return (
        <div id="portfolio" className="portfolio-wrapper">
            <div className="container">
                <h1 className="text-uppercase text-center py-5">Projects</h1>
                <div className="image-box-wrapper row justify-content-center">
                    <div className="portfolio-image-box" onClick={openPopupboxProj1}>
                    <img className="portfolio-image" src={proj1} alt="Software Engineer Interview Simulator" />
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                {/* - */}
                    <div className="portfolio-image-box" onClick={openPopupboxProj2}>
                    <img className="portfolio-image" src={proj2} alt="iPlayed" />
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                </div>
                {/* - */}
                    <div className="portfolio-image-box" onClick={openPopupboxProj3}>
                    <img className="portfolio-image" src={proj3} alt="FakeX" />
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                {/* - */}
                    <div className="portfolio-image-box" onClick={openPopupboxProj4}>
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
