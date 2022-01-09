import Head from 'next/head'
import Image from 'next/image'
import Layout from '@components/Layout'
import Link from 'next/link'
import BlockContent from '@sanity/block-content-to-react'
import { serializers } from '@lib/serializers'

import client, {
  getClient,
  usePreviewSubscription,
  PortableText,
} from "@lib/sanity";

import { groq } from "next-sanity";

const Blogs = ({postdata}) => {
  return (
    <div>
      <Head>
        <title>Vignesh Murugan | Projects</title>
        <meta name="description" content="I'm Vignesh and senior developer currently working for Plato Creative in Christchurch New Zealand." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <div className="space-y-16 md:space-y-24">
          <div className="space-y-12 md:items-center">
            <div className="space-y-2">
              <h1 className="font-sans text-2xl font-black md:text-4xl text-primary">Blogs</h1>
              <p className="font-sans text-xl leading-snug md:text-2xl text-tertiary">What technical blogging meant for me is re-thinking on how i've built projects & learning that particular technology.</p>
            </div><hr/>
            {postdata.map(post => {
                    return (
                      <div key={post._id} className="flex flex-row mb-8">
                        <Link href={"/blogs/" + post.slug}>
                          <a className="w-full  p-1">
                            <div className="">
                              <h4 className="text-lg font-medium w-full mb-2 uppercase">{post.title}</h4>
                              {post.summary &&
                                <BlockContent
                                  renderContainerOnSingleChild
                                  className="wysiwyg  home-wysiwyg"
                                  blocks={post.summary}
                                  serializers={serializers}
                                />
                              }
                            </div>
                          </a>
                        </Link>
                      </div>
                    )
              })}
        </div>
        </div>
      </Layout>
    </div>
  )
}

const queryPost = groq`
*[_type == "post"] | order(_createdAt desc)[0..3] {
  ..., 
  author->,
  "slug": slug.current,
  categories[]->
}
`;

export async function getStaticProps({ params, preview = false }) {
  const post = await getClient(preview).fetch(queryPost);

  return {
    props: {
      postdata: post,
      preview,
    },
    revalidate: 10,
  };
}

export default Blogs
