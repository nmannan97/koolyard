import React from "react"
import "./Footer.css"

import ig from "./user/pictures/Logos/instagram.svg"

export default function Footer(){

    
    return(
        <>
            <div id="footer">
                <p className="footer_font">this is my footer</p>
                <div id="footer_social_media">
                    <ul>
                        <li>
                            <img src={ig}/> 
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}