import React,{Fragment} from "react";

const Footer = (props) => {
    console.log('>>>in footer',props)
    return(
        <Fragment>
            <center>
                <h3>&copy; Sasha Flores {props.year}</h3>
            </center>
        </Fragment>
        )
    }

export default Footer;