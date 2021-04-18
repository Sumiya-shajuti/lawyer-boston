import React from 'react';
import './Footer.css';
import FooterCol from '../FooterCol/FooterCol';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const noNamed = [
        {name: "Emergency Service" , link: "/emergency"},
        {name: "Judicial Issues" , link: "/judicial"},
        {name: "Work Permit" , link: "/work"},
        {name: "Family Reunification" , link: "/family"},
        {name: "Immigrant Investor & Business Permission" , link: "/check"},
    ]
    const ourAddress = [
        {name: "New York - 101020 Boston" , link: "//google.com/map"},
        {name: "Yards" , link: "//google.com/map"},
       
    ]
    const law = [
        {name: "Emergency Help" , link: "/emergency"},
        {name: "" , link: "/check"},
        {name: "Work Permit" , link: "/work"},
        {name: "advice" , link: "/check"},
        {name: "advice" , link: "/check"},
        {name: "advice" , link: "/check"},
        {name: "advice" , link: "/check"}
    ]
    const services = [
        {name: "Emergency Care" , link: "/emergency"},
        {name: "advice" , link: "/check"},
        {name: "Work Permit" , link: "/work"},
        {name: "Work Permit" , link: "/work"},
        {name: "advice " , link: "/check"},
        {name: "advice" , link: "/check"},
        {name: "advice" , link: "/check"}
    ]
    return (
        <footer className="footer-area clear-both">
            <div className="container pt-5">
                <div className="row py-5">
                    <FooterCol key={1} menuTitle={"Boston Lawyer"} menuItems={noNamed}/>
                    <FooterCol key={2} menuTitle="Services" menuItems={services}/>
                    <FooterCol key={3} menuTitle="Law Service" menuItems={law}/>
                    <FooterCol key={4} menuTitle="Our Address" menuItems={ourAddress}> 
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                        </ul>
                        <div className="mt-5">
                            <h6>Call now</h6>
                            <button className="btn btn-primary">+202556765</button>
                        </div>
                    </FooterCol>
                </div>
                <div className="copyRight text-center">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </footer>
        
    );
};

export default Footer;