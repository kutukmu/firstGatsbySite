import React from "react"
import { Link } from "gatsby"
import Head from "../components/head"
import Layout from "../components/LAyout"


const NotFound = () => {


    return (
        <Layout>
            <Head title="404" />
            <h1>Page not found</h1>
            <Link to="/">Head Home</Link>
        </Layout>
    )
}


export default NotFound