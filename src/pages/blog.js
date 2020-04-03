import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'

const blog = () => {
    return (
        <Layout>
            <h1>hello from blog page</h1>
            <Link to="/">Back home</Link>
        </Layout>
    )
}

export default blog
