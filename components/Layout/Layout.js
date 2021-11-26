import { Header } from "../Header/Header"
import Head from "next/head"
import styles from "./layout.module.css"


export function Layout({ children, title="Koshkas" }) {


    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>

            <Header></Header>

            <main className={styles.layout}>
                <div className="container">
                    {children}
                </div>
            </main>
        </>
    )
}