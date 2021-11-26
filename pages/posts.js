import { useEffect, useState } from "react";
import { Layout } from "../components/Layout/Layout";
import { PostItem } from "../components/Post/PostItem"

export default function Posts({ posts: serverPosts }) {
    const [posts, setPosts] = useState(serverPosts)
    useEffect(() => {
        async function load() {
            const data = await loadPosts()
            setPosts(data)
        }

        load()
    }, [])

    if (!posts) {
        return (
            <Layout title="Posts">
                <p>Loading...</p>
            </Layout>
        )
    }

    return (
        <Layout title="Posts">
            <h1>Posts</h1>
            <div className="row row-cols-4 g-5">
                {posts.map(post => (
                    <PostItem 
                        key={post.id}
                        title={post.title}
                        id={post.id}
                    />
                ))}
            </div>
        </Layout>
    )
}

Posts.getInitialProps = async (ctx) => {
    if (!ctx.req) {
        return {
            posts: null
        }
    }

    const posts = loadPosts()

    return {
        posts: posts
    }
}

async function loadPosts() {
    const response = await fetch('http://localhost:4200/posts')
    const posts = await response.json()

    return posts
}