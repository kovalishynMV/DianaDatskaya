import React from 'react';
import './contact.css';
import Sendtext from "../components/Sendtext.js"

class Contact extends React.Component {
    render() {
        return (
            <div className="contact">
                <h5 className="intouch">LET’S BE IN TOUCH</h5>

                <div className="contact-main">
                    <div className="contact-block">
                        <h2>Телефон</h2>
                        <p>&nbsp;</p>
                        <p>+38 (093) 164 87 32</p>
                    </div>

                    <div className="contact-block">
                        <h2>E-Mail</h2>
                        <p>&nbsp;</p>
                        <p>dianadatskaya@gmail.com</p>
                    </div>

                    <div className="contact-block">
                        <h2>Instagram</h2>
                        <p>&nbsp;</p>
                        <p>@dianadatskaya</p>
                    </div>
                </div>

                <div>
                    <Sendtext />
                </div>

            </div>
        );
    }
}

export default Contact;