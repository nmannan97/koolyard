import React from "react"
import "./Footer.css"

import Instagram from "./user/pictures/Logos/Instagram.png"
import Twitter from "./user/pictures/Logos/Twitter.png"
import Facebook from "./user/pictures/Logos/Facebook.png"

export default function Footer(){

    
    return(
        <>
            <div id="footer">
                <div>
                    <table id="footer_table">
                        <tr style={{width:"100%"}}>
                            <th id="footer_th" className="footer_link"><p style={{fontWeight:"normal"}}>Contact Us</p></th>
                            <th id="footer_th" className="footer_link"><img id="footer_image" src={Instagram}></img></th>
                            <th id="footer_th" className="footer_link"><img id="footer_image" src={Twitter}></img></th>
                            <th id="footer_th" className="footer_link"><img id="footer_image"src={Facebook}></img></th>
                        </tr>   
                    </table>
                </div>
            </div>
        </>
    )
}