import Link from "next/link"
import { Layout } from "../components/Layout/Layout"

export default function Page404() {

    return (
        <Layout>
            <h1>404</h1>
            <h2>Net takogo adresa</h2>
            <div>
                <Link href={'/'}>
                    <a>Go Home</a>
                </Link>
            </div>
        </Layout>
    )
}