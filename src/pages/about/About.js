import React from 'react';
import './about.css';

class About extends React.Component {
    render() {
        return (
            <div className="about">
                <h5>О БРЕНДЕ</h5>
                <h2>DianaDatskaya</h2>

                <div className="block-text-about">
                    <div className="text-about">
                        <p>Forget Ebay and other forms of advertising for your property that costs you hard earned money. Why not do it all for free? Investment Assets Properties have ready several locations around the world to take your free listings for any luxury property you have.</p>
                        <p>&nbsp;</p>
                        <p>&nbsp;</p>
                        <p>Each location web site is purpose built so every Search Engine will pick up new listings within minutes. This way your customers only have to type in keywords relating to their search for a luxury home and the Search Engine will show the Invest Asset web site applicable to their location they are looking for.</p>
                    </div>

                    <div className="text-about">
                        <p>Conversations can be a tricky business. Sometimes, decoding what is said with what is meant is difficult at best. However, communication is a necessary tool in todays world. And it’s not only speaking that can be difficult, but trying to interpret body language, and other language barriers are just a few of the obstacles barring effective communication. It’s often been the case were one party completely miscommunicates to another due to a misunderstanding between parties.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;