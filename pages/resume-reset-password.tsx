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
        <Image
          className="module__full-img" 
          src="/img/profile.jpeg"
          alt="profile-photo"
          width={599}
          height={599}
        />
      </Layout>
    </div>
  )
}

export default Home
