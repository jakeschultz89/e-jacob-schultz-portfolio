import React from 'react'
import author from '../profile-pic.jpeg'

const AboutMe = () => {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="photo-wrap mb-5">
                    <img className="profile-img" src={author} alt="author pic" />
                    </div>
                </div>
                <div className="col-lg-6 col-xm-12">
                    <h1 className="about-heading">About Me</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia enim distinctio commodi aliquam quod. Porro, vel sint. Similique tenetur autem maxime molestias ipsum earum. Deserunt excepturi exercitationem nobis. Reprehenderit, error?</p>
                </div>

            </div>
        </div>
    )
}

export default AboutMe
