import Head from "next/head";
import Layout from "@components/Layout";
import Link from "next/link";
import { components } from "@lib/serializers";
import { getClient } from "@lib/sanity";
import { groq } from "next-sanity";
import { PortableText } from "@portabletext/react";

const Blogs = ({ postdata }) => {
  return (
    <div>
      <Head>
        <title>Vignesh Murugan | Projects</title>
        <meta
          name="description"
          content="I'm Vignesh and senior developer currently working for Plato Creative in Christchurch New Zealand."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <div className="space-y-16 md:space-y-24">
          <div className="space-y-12 md:items-center">
            <div className="space-y-2">
              <h1 className="h1">Blogs</h1>
              <p className="font-sans text-xl leading-snug md:text-xl text-tertiary">
                Re-thinking on how I&apos;ve built projects & learning that
                comes with it.
              </p>
            </div>
            <hr />
            {postdata.map((post) => {
              return (
                <div key={post._id} className="flex flex-row mb-8">
                  <Link href={"/blogs/" + post.slug}>
                    <a className="w-full  p-1">
                      <div className="">
                        <h4 className="font-medium w-full mb-2 h4">
                          {post.title}
                        </h4>
                        {post.summary && (
                          <div className="wysiwyg home-wysiwyg">
                            <PortableText
                              value={post.summary}
                              components={components}
                            />
                          </div>
                        )}
                      </div>
                    </a>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </Layout>
    </div>
  );
};

const queryPost = groq`
*[_type == "post"] | order(_createdAt desc) {
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

export default Blogs;
