import React from "react";
import Img from "../src/Images/1.png";


import Common from "./Common";

const Home = () => {
    return (
        <>
            <Common
                name="Grow Your Business With "
                imgsrc={Img}
                visit="/services"
                btn_name="Get Started" />
        </>

    );
}

export default Home;