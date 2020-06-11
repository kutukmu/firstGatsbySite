import React from "react";
import Header from "./header"
import Footer from "./footer"
import Layoutstyle from "./layout.module.scss"


const Layout = (props) => {


    return (
        <div className={Layoutstyle.container}>
            <div className={Layoutstyle.inner}>
                <Header />
                {props.children}
            </div>
            <Footer />

        </div>
    )
}

export default Layout