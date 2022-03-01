import React from 'react'
import author from '../images/schultz-profile.jpg'

const AboutMe = () => {
    return (
        <div id="about" className="container py-5">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="photo-wrap mb-5">
                    <img className="profile-img" src={author} alt="author pic" />
                    </div>
                </div>
                <div className="col-lg-6 col-xm-12">
                    <h1 className="about-heading">About Me</h1>
                    <p>I am a challenge-seeking software engineer who enjoys solving difficult problems in both individual and team-based settings. My experience in the Marine Corps taught me how to lead teams, take on responsibilities, and adapt quickly to new settings. My ability to connect with others on a personal level makes me a perfect fit for working on a team and with clients.</p>
                    <p>Check out my GitHub - <a href="https://github.com/jakeschultz89" target="_blank">jakeschultz89</a></p>
                </div>

            </div>
        </div>
    )
}

export default AboutMe
