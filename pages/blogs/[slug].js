import Head from "next/head";
import Layout from "@components/Layout";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import { components } from "@lib/serializers";
import { getClient } from "@lib/sanity";
import Date from "@components/date";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import CustomLink from "@components/CustomLink";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeCodeTitles from "rehype-code-titles";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrism from "rehype-prism-plus";

const markdownComponents = {
  a: CustomLink,
};

const Blog = ({ postsData, markdown }) => {
  return (
    <div>
      <Head>
        <title>Vignesh Murugan | {postsData.page.title}</title>
        <meta name="description" content="I'm Vignesh and senior developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <div className="space-y-12 md:space-y-16">
          <Link href="/blogs">
            <a className="leading-snug text-tertiary hover:text-gray-1000 dark:hover:text-gray-100">
              ← Blogs
            </a>
          </Link>
          <div className="space-y-12 md:items-center">
            <div className="space-y-2">
              <h1 className="font-sans text-2xl font-black md:text-4xl text-primary mb-2">
                {postsData.page.title}
              </h1>
              <Date dateString={postsData.page.publishedAt} />
            </div>
            <div class="prose wysiwyg">
              {markdown && (
                <MDXRemote
                  {...markdown}
                  components={{ ...markdownComponents }}
                />
              )}
            </div>
            {postsData.page.table && (
              <table>
                <tbody>
                  {postsData.page.table.rows.map((row) => (
                    <tr key={row._key}>
                      {row.cells.map((cell) => (
                        <td>{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </Layout>
    </div>
  );
};

const getAllDocSlugs = async (doc) => {
  const data = await getClient().fetch(
    `*[_type == "${doc}"]{ "slug": slug.current }`
  );
  return data;
};

const getPosts = async (slug, preview) => {
  const slugs = [`/${slug}`, slug, `/${slug}/`];

  const query = `
    {
      "page": *[_type == "post" && isDraft != true && slug.current in ${JSON.stringify(
        slugs
      )}] | order(_updatedAt desc)[0]{
        title,
        markdown,
		    table,
        publishedAt
      },
    }
    `;

  const data = await getClient(preview).fetch(query);

  return data;
};

export async function getStaticProps({ params, preview = false }) {
  const postsData = await getPosts(params.slug, {
    active: preview,
  });

  const source = postsData.page.markdown;
  const mdxSource = await serialize(source, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [
        rehypeSlug,
        rehypeCodeTitles,
        rehypePrism,
        [
          rehypeAutolinkHeadings,
          {
            properties: {
              className: ["anchor"],
            },
          },
        ],
      ],
      format: "mdx",
    },
  });

  return {
    props: {
      postsData: postsData,
      markdown: mdxSource,
    },
    revalidate: 10,
  };
}

export async function getStaticPaths() {
  const allPosts = await getAllDocSlugs("post");

  return {
    paths:
      allPosts?.map((post) => {
        return {
          params: {
            slug: post.slug,
          },
        };
      }) || [],
    fallback: false,
  };
}

export default Blog;
