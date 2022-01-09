import React from 'react';
import {Link} from "react-scroll";
import {
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon,
    RedditShareButton,
    RedditIcon,
    LinkedinShareButton,
    LinkedinIcon
} from 'react-share'

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    {/* <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="d-flex">
                            <p>E Jacob Schultz 2022</p>
                        </div>
                        <div className="d-flex">
                            <p>ejacobschultz@gmail.com</p>
                        </div>
                        <div className="d-flex">
                            <p>330-703-7899</p>
                        </div>
                    </div> */}
                    {/* <div className="col-lg-3 col-md-3 col-sm-6">
                        <div className="row">
                            <div className="col">
                                <Link smooth={true} to="home" className="nav-link" href="#">Home <span className="sr-only">(current)</span></Link>
                                <br />
                                <Link smooth={true} to="about" offset={-100} className="nav-link" href="#">About Me</Link>
                            </div>
                            <div className="col">
                                <Link smooth={true} to="experience" offset={-100} className="nav-link" href="#">Experience</Link>
                                <br />
                                <Link smooth={true} to="portfolio" offset={-100} className="nav-link" href="#">Projects</Link>
                            </div>
                        </div>
                    </div> */}
                    <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
                        <div className="d-flex justify-content-center">
                        <LinkedinShareButton
                                url={"https://www.ejacobschultz.com/"} 
                                quote={"Full Stack Developer"} 
                                hashtag={"#javascript"}
                            >
                                <LinkedinIcon className="mx-3" size={36} />
                            </LinkedinShareButton>
                            <FacebookShareButton
                                url={"https://www.ejacobschultz.com/"} 
                                quote={"Full Stack Developer"} 
                                hashtag={"#javascript"}
                            >
                                <FacebookIcon className="mx-3" size={36} />
                            </FacebookShareButton>
                            <TwitterShareButton
                                url={"https://www.ejacobschultz.com/"} 
                                quote={"Full Stack Developer"} 
                                hashtag={"#javascript"}
                            >
                                <TwitterIcon className="mx-3" size={36} />
                            </TwitterShareButton>
                            <RedditShareButton
                                url={"https://www.ejacobschultz.com/"} 
                                quote={"Full Stack Developer"} 
                                hashtag={"#javascript"}
                            >
                                <RedditIcon className="mx-3" size={36} />
                            </RedditShareButton>
                        </div>
                        <p className="pt-3 text-center">
                            Copyright&copy;
                            {new Date().getFullYear()}&nbsp;E Jacob Schultz | All Rights Reserved
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;