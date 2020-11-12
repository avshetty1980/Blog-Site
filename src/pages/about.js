import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";



const AboutPage = () => {
    return(
        <>
        <Layout>
            <h1>Title</h1>
        <p>lorem ipsum</p>
        <p><Link to="/contact">Contact Me!</Link></p>
        </Layout>
        
        </>
    );
}

export default AboutPage;