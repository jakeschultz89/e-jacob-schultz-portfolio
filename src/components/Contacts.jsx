import React, { useState } from "react";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";

const Contacts = () => {
    const [successMessage, setSuccessMessage] = useState('');
    const { register, handleSubmit, errors } = useForm();

    const serviceID = "service_ID";
    const templateID = "template_ID";
    const userID = "user_uYjEK3mhAH1L2LiuL7WNW";

    const onSubmit = (data, r) => {
        sendEmail(
            serviceID,
            templateID,
            {
                name: data.name,
                email: data.email,
                phone: data.phone,
                subject: data.subject,
                description: data.description
            },
            userID
        )
        r.target.reset();
    }

    const sendEmail = (serviceID, templateID, variables, userID) => {
    emailjs.send(serviceID, templateID, variables, userID)
        .then(() => {
            setSuccessMessage('Form sent successfully! I will contact you as soon as possible.');
        }).catch(err => console.error(`Something went wrong ${err}`));
    };

    return (
        <div className="contacts">
            <div className="text-center">
                <h1>Contact Me</h1>
                <p>Please fill out the form and describe your project needs and I will contact you as soon as possible.</p>
            </div>
            <div className="container">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                        <div className="col-md-6 col-xs-12">
                            {/* NAME INPUT */}
                            <div className="text-center">
                                <input 
                                type="text"
                                className="form-control"
                                placeholder="Name"
                                name="name"
                                // ref={
                                //     register({
                                //         required: "Please enter your name",
                                //         maxLength: {
                                //             value: 20,
                                //             message: "Please enter a name with fewer than 20 characters"
                                //         }
                                //     })
                                // }
                                />
                                <div className="line"></div>
                            </div>
                            {/* <span className="error-message">
                                {errors.name && errors.name.message}
                            </span> */}
                            {/* EMAIL INPUT */}
                            <div className="text-center">
                                <input 
                                type="email"
                                className="form-control"
                                placeholder="Email"
                                name="email"
                                />
                                <div className="line"></div>
                            </div>
                            {/* PHONE INPUT */}
                            <div className="text-center">
                                <input 
                                type="text"
                                className="form-control"
                                placeholder="Phone Number"
                                name="phone"
                                />
                                <div className="line"></div>
                            </div>
                            {/* SUBJECT INPUT */}
                            <div className="text-center">
                                <input 
                                type="text"
                                className="form-control"
                                placeholder="Subject"
                                name="subject"
                                />
                                <div className="line"></div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xs-12">
                            {/* DESCRIPTION */}
                            <div className="text-center">
                                <textarea
                                type="text"
                                className="form-control"
                                placeholder="Description"
                                name="description"
                                ></textarea>
                                <div className="line"></div>
                            </div>
                            <button className="btn-main-offer contact-btn" type="submit">Contact Me</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contacts
