import React from "react";
import Header from "../components/layout/Header.js"; 
import Footer from "../components/layout/Footer.js"; 
import Banner from "../components/sections/Banner"; 
import TopNav from "../components/sections/TopNav"; 

const Support = () => {
    return (
        <>
            <TopNav />
            
            <Banner>
                SUPPORT!
            </Banner>

            Do you have questions about flour or flowers?  Call us!  
            <Footer />
        </>
    ); 
}; 

export default Support; 