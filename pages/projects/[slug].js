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

const Project = ({projectsData}) => {
  return (
    <div>
      <Head>
        <title>Vignesh Murugan | {projectsData.page.title}</title>
        <meta name="description" content="I'm Vignesh and senior developer currently working for Plato Creative in Christchurch New Zealand." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <div className="space-y-12 md:space-y-16">
          <Link href="/projects"><a className="leading-snug text-tertiary hover:text-gray-1000 dark:hover:text-gray-100">← Projects</a></Link>
          <div className="space-y-12 md:items-center">
            <div className="space-y-2">
              <h1 className="font-sans text-2xl font-black md:text-4xl text-primary">{projectsData.page.title}</h1>
            </div>
            {projectsData.page.body &&
              <BlockContent
                renderContainerOnSingleChild
                className="wysiwyg"
                blocks={projectsData.page.body}
                serializers={serializers}
                projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
                dataset= 'production'
              />
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

const getProjects = async (slug, preview) => {
  const slugs = [`/${slug}`, slug, `/${slug}/`]

  const query = `
    {
      "page": *[_type == "project" && isDraft != true && slug.current in ${JSON.stringify(
        slugs
      )}] | order(_updatedAt desc)[0]{
        title,
        summary,
        body
      },
    }
    `

  const data = await getClient(preview).fetch(query);

  return data
}

export async function getStaticProps({ params, preview = false }) {
  const projectsData = await getProjects((params.slug), {
    active: preview,
  })

  return {
    props: {
      projectsData: projectsData,
    },
    revalidate: 10
  }
}

export async function getStaticPaths() {
  const allProjects = await getAllDocSlugs('project')

  return { 
    paths:
    allProjects?.map((project) => {
        return {
          params: {
            slug: project.slug,
          },
        }
      }) || [],
    fallback: false,
  }
}

export default Project
