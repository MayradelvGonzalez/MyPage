import React from "react";
import '../App.css';

function Footer(props) {
    return (
        <div className="footer"><h1>Hi this is a footer and you are {props.name}</h1></div>

    )
}

export default Footer;