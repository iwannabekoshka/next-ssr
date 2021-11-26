import { Layout } from "../../components/Layout/Layout"
import Link from 'next/link'
import {useState, useEffect} from 'react'
import { useRouter } from "next/dist/client/router"

export default function Post({ post: serverPost }) {
    const [post, setPost] = useState(serverPost)
    const router = useRouter()
    useEffect(() => {
        async function loadPost() {
            const response = await fetch(`http://localhost:4200/posts/${router.query.id}`)
            const data = await response.json()
            setPost(data)
        }

        loadPost()
    }, [])

    if (!post) {
        return (
            <Layout>
                <p>Loading...</p>
            </Layout>
        )
    }

    return (
        <Layout title={`Post ${post.id}`}>
            <h1>{post.title}</h1>
            <p>{post.text}</p>
            <div>
                <Link href={'/posts'}>
                    <a>Go to all posts</a>
                </Link>
            </div>
        </Layout>
    )
}

Post.getInitialProps = async (ctx) => {
    if (!ctx.req) {
        return {
            post: null
        }
    }
    
    const response = await fetch(`http://localhost:4200/posts/${ctx.query.id}`)
    const post = await response.json()

    return {
        post: post
    }
}

// export async function getServerSideProps(ctx) {   
//     const response = await fetch(`http://localhost:4200/posts/${ctx.query.id}`)
//     const post = await response.json()

//     return {
//         props: {
//             post: post
//         }
//     }
// }