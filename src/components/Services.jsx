import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faDesktop, faFileCode } from '@fortawesome/free-solid-svg-icons';


const Services = () => {
    return (
        <div id="services" className="services">
            <h1 className="py-5">My Services</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-lg col-md-6 col-sm-6">
                            <div className="box">
                                <div className="circle"><FontAwesomeIcon className="icon" icon={faDesktop} size="2x"/></div>
                                <h3>Web Design</h3>
                                <p>lorem ipsum dolor sit amet, consectetur</p>
                            </div>
                        </div>
                        {/* - */}
                        <div className="col-lg col-md-6 col-sm-6">
                            <div className="box">
                            <div className="circle"><FontAwesomeIcon className="icon" icon={faFileCode} size="2x"/></div>
                                <h3>Web Development</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis similique recusandae suscipit necessitatibus delectus culpa doloremque alias id iure quibusdam. Sapiente, in soluta atque inventore mollitia et porro aliquid. Voluptates.</p>
                            </div>
                        </div>
                        {/* - */}
                        <div className="col-lg col-md-6 col-sm-6">
                            <div className="box">
                            <div className="circle"><FontAwesomeIcon className="icon" icon={faFacebookF} size="2x"/></div>
                                <h3>ReactJS</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis ipsum saepe ducimus sit ullam incidunt, tempora sequi corporis eum porro minus expedita eaque voluptatem ratione aspernatur, eveniet sunt iste provident.</p>
                            </div>
                        </div>
                        {/* - */}
                        <div className="col-lg col-md-6 col-sm-6">
                            <div className="box">
                            <div className="circle"><FontAwesomeIcon className="icon" icon={faGoogle} size="2x"/></div>
                                <h3>MongoDB</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quibusdam ea, harum dolore dolorum hic voluptatem temporibus quas quasi veritatis impedit obcaecati quia consectetur itaque omnis. Illo dignissimos inventore tempora.</p>
                            </div>
                        </div>
                        {/* - */}
                    </div>
                </div>
            </div>
    )
}

export default Services
