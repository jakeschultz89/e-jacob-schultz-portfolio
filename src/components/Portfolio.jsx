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
    return (
        <div className="portfolio-wrapper">
            <div className="container">
                <h1 className="text-uppercase text-center py-5">Portfolio</h1>
                <div className="image-box-wrapper row justify-content-center">
                    <div className="portfolio-image-box">
                    <img className="portfolio-image" src={proj1} alt="Software Engineer Interview Simulator" />
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                {/* - */}
                    <div className="portfolio-image-box">
                    <img className="portfolio-image" src={proj2} alt="iPlayed" />
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                </div>
                {/* - */}
                    <div className="portfolio-image-box">
                    <img className="portfolio-image" src={proj3} alt="FakeX" />
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                {/* - */}
                    <div className="portfolio-image-box">
                    <img className="portfolio-image" src={proj4} alt="Fakeflix" />
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                </div>
            </div>
        </div>
    </div>
    )
}

export default Portfolio;
