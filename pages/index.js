import Head from "next/head"
import About from "../components/about/about.com"
import Layout from "../components/layout"
import Indexstyle from "./index.css"

export default function Home() {
  return (
    <Layout>
      <Indexstyle>
        <Head>
          <title>Daniel Okezie Archive</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="head-text row">
          <h1 className="head-title">Daniel Okezie Archive</h1>
          <div className="textbox">
            <main className="container">
              <div className="title">
                <p>From: </p>
                <p>To: </p>
                <p>Message: </p>
              </div>
              <div className="body">
                <p>Danielokezie75@gmail.com</p>
                <p>hello@world.thanks</p>
                <p>Danielokezie75@gmail.com</p>
              </div>
            </main>
          </div>
        </main>
        <About/>
      </Indexstyle>
    </Layout>
  )
}
