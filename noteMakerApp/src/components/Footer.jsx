import React from "react";

function Footer(){
    const date = new Date();
    const Year = date.getFullYear();
    return (
        <footer>
            <p><p>copyright &copy; {Year}</p></p>
        </footer>
    )
}
export default Footer;