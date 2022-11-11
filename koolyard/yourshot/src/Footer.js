import React from "react"
import "./Footer.css"

import Instagram from "./user/pictures/Logos/Instagram.png"
import Twitter from "./user/pictures/Logos/Twitter.png"
import Facebook from "./user/pictures/Logos/Facebook.png"

export default function Footer(){

    
    return(
        <>
            <div id="footer">
                <div id="footer_container">
                    <div>
                        <a className="footer_font">about us</a>
                        <a id="footer_contact" className="footer_font">contact</a>
                    </div>
                    <div id="footer_social_media">
                        <ul id="footer_images">
                            <li>
                                <a className="footer_link">
                                    <img id="footer_instagram" src={Instagram}/> 
                                </a>
                            </li>
                            <li>
                                <a className="footer_link">
                                    <img id="footer_twitter" src={Twitter}/> 
                                </a>
                            </li>
                            <li>
                                <a className="footer_link">
                                    <img id="footer_facebook" src={Facebook}/> 
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}