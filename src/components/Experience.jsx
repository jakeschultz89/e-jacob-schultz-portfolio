import React from 'react'

const Experience = () => {
    return (
        <div id="experience" className="experience">
            <div className="d-flex justify-content-center my-5">
            <h1>Experience</h1>
            </div>
            <div className="container experience-wrapper">
            <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>2021</h3>
                        <p><strong>Software Engineering Immersive - General Assembly</strong></p>
                        <p>Completed 500+ hours of expert-led instruction in:
                            <ul>
                                <li>HTML5</li>
                                <li>CSS3</li>
                                <li>JavaScript</li>
                                <li>Python</li>
                                <li>ReactJS</li>
                                <li>MongoDB</li>
                            </ul>
                        </p>

                    </div>
                </div>
                {/* - */}
                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>2018-2021</h3>
                        <p><strong>Human Resources Technician - US Navy</strong></p>
                        <p>Scheduled and processed nationwide travel of 65 students and personnel.</p>
                        <p>Prepared and completed 20+ contracts with scholarship recipient students.</p>
                        <p>Maintained medical, dental and performance records of 65 students and personnel.</p>
                        <p>Ensured students met medical qualifications prior to commission into the Navy or Marine Corps.</p>
                        <p>Reduced company spending by $1,200 per year by removing the need for specialized hardware.</p>
                    </div>
                </div>
                {/* - */}
                <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>2016-2018</h3>
                        <p><strong>Security Officer - The J.M. Smucker Company</strong></p>
                        <p>Maintained records of J. M. Smucker deliveries and shipments using Microsoft Office.</p>
                        <p>Monitored security cameras and alarm systems.</p>
                        <p>Communicated with other departments and shifts to coordinate access control updates for executive events.</p>
                    </div>
                </div>
                {/* - */}
                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>2013-2016</h3>
                        <p><strong>Field Technician 2 - Time Warner Cable</strong></p>
                        <p>Adhered to strict timelines for task completion.</p>
                        <p>Installed, tested and adjusted cable equipment while providing enthusiastic customer service.</p>
                        <p>Diagnosed and corrected failures of cable, phone and Internet systems.</p>
                    </div>
                </div>
                {/* - */}
                <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>2010-2013</h3>
                        <p><strong>V-22 Avionics Technician - US Marine Corps</strong></p>
                        <p>Ensured all electronic systems for 14 aircraft operated at full capacity.</p>
                        <p>Diagnosed, isolated and corrected system failures of integrated avionics systems.</p>
                        <p>Worked alongside members from other departments to complete tasks and daily deadlines.</p>
                    </div>
                </div>
                {/* - */}
            </div>
        </div>
    )
}

export default Experience
