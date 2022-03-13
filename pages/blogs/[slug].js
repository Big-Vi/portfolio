import Head from 'next/head'
import Layout from '@components/Layout'
import Link from 'next/link'
import { PortableText } from '@portabletext/react'
import { components } from '@lib/serializers'
import { getClient } from "@lib/sanity";

const Blog = ({postsData}) => {
  return (
    <div>
      <Head>
        <title>Vignesh Murugan | {postsData.page.title}</title>
        <meta name="description" content="I'm Vignesh and senior developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <div className="space-y-12 md:space-y-16">
          <Link href="/blogs"><a className="leading-snug text-tertiary hover:text-gray-1000 dark:hover:text-gray-100">← Blogs</a></Link>
          <div className="space-y-12 md:items-center">
            <div className="space-y-2">
              <h1 className="font-sans text-2xl font-black md:text-4xl text-primary">{postsData.page.title}</h1>
            </div>
            {postsData.page.body && 
              <div className="wysiwyg home-wysiwyg">
                <PortableText value={postsData.page.body} components={components} />
              </div>
            }
        </div>
        </div>
      </Layout>
    </div>
  )
}

const getAllDocSlugs = async (doc) => {
  const data = await getClient().fetch(
    `*[_type == "${doc}"]{ "slug": slug.current }`
  )
  return data
}

const getPosts = async (slug, preview) => {
  const slugs = [`/${slug}`, slug, `/${slug}/`]

  const query = `
    {
      "page": *[_type == "post" && isDraft != true && slug.current in ${JSON.stringify(
        slugs
      )}] | order(_updatedAt desc)[0]{
        title,
        body
      },
    }
    `

  const data = await getClient(preview).fetch(query);

  return data
}

export async function getStaticProps({ params, preview = false }) {
  const postsData = await getPosts((params.slug), {
    active: preview,
  })

  return {
    props: {
      postsData: postsData,
    },
    revalidate: 10
  }
}

export async function getStaticPaths() {
  const allPosts = await getAllDocSlugs('post')

  return { 
    paths:
    allPosts?.map((post) => {
        return {
          params: {
            slug: post.slug,
          },
        }
      }) || [],
    fallback: false,
  }
}

export default Blog
