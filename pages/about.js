import Router from 'next/router'
import { Layout } from '../components/Layout/Layout'
import Head from 'next/head'

export default function About() {
    const goPostsHandler = () => {
        Router.push('/posts')
    }

    return (
        <>
            <Layout title="About">
                <h1>About</h1>
                <button onClick={() => Router.push('/')}>Go Home</button>
                <br />
                <button onClick={goPostsHandler}>Go Posts</button>
            </Layout>
        </>
    )
}