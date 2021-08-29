import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Layout from '@components/Layout'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Vignesh Murugan | Full stack developer</title>
        <meta name="description" content="I'm Vignesh and full-stack developer currently working for Plato Creative in Christchurch New Zealand." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <h1 className="font-bold h1 text-center">Blogs</h1>
      </Layout>
    </div>
  )
}

export default Home
