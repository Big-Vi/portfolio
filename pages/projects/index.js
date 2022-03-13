import Head from 'next/head'
import Layout from '@components/Layout'
import Link from 'next/link'
import { components } from '@lib/serializers'
import { getClient } from "@lib/sanity";
import { groq } from "next-sanity";
import { PortableText } from '@portabletext/react'

const Projects = ({projectdata}) => {
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
              <h1 className="font-sans text-xl font-black md:text-2xl text-primary">Projects</h1>
              <p className="font-sans text-xl leading-snug md:text-xl text-tertiary">A few projects I&apos;ve recently worked on</p>
            </div><hr/>
            {projectdata.map(project => {
                    return (
                      <div key={project._id} className="flex flex-row mb-8">
                        <Link href={"/projects/" + project.slug}>
                          <a className="w-full  p-1">
                            <div className="">
                              <h4 className="text-lg font-medium w-full mb-2 uppercase">{project.title}</h4>
                              {project.summary &&
                                <div className="wysiwyg home-wysiwyg">
                                  <PortableText value={project.summary} components={components} />
                                </div>
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

const queryProject = groq`
*[_type == "project"] | order(_createdAt desc)[0..3] {
  ..., 
  "slug": slug.current,
  categories[]->
}
`;

export async function getStaticProps({ params, preview = false }) {
  const project = await getClient(preview).fetch(queryProject);

  return {
    props: {
      projectdata: project,
      preview,
    },
    revalidate: 10,
  };
}

export default Projects
