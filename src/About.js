import React from "react";
import Img from "../src/Images/Abt.jpg";
import Common from "./Common";
const About = () => {
    return (
        <>
            <Common
                name="Welcome to About Page"
                imgsrc={Img}
                visit="/contact"
                btn_name="Contact Now" />
        </>

    );
}

export default About;