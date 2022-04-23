import Head from 'next/head'
import Layout from '@components/Layout'

const PrivacyPolicy = () => {

  return (
    <div>
     <Head>
        <title>Resume on the fly - Privacy Policy</title>
        <meta name="description" content="Build resume super fast." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <h1 className="font-bold h1 mb-4">Privacy Policy</h1>
        <p>We do not collect any personal information about you. Resume builder store the information in your own device & will not store any data in remote database. If you choose to delete this app from your device, data would be deleted along with it.</p>
        <p>We do not share any personal identifying info publicly or with third-parties.</p>
        <p>We do not request any personal information via email or via any other medium. Please refuse such request.</p>
        <p>We may update our privacy policy from time to time. We will notify of any changes.</p>
      </Layout> 
    </div>
  )
}


export default PrivacyPolicy

