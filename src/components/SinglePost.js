import React, { useState, useEffect } from "react"
import sanityClient from "../client.js"
import { useParams } from "react-router-dom"
import imageUrlBuilder from '@sanity/image-url'
import BlockContent from '@sanity/block-content-to-react'

const builder = imageUrlBuilder(sanityClient)
function urlFor(source) {
    return builder.image(source)
}

export default function SinglePost() {
  const [singlePost, setSinglePost] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == '${slug}']{
                title,
                _id,
                slug,
                mainImage{
                    asset-> {
                        _id,
                        url
                    },
                    alt
                },
                body,
                'name': author->name,
                'authorImage': author->image
            }`
      )
      .then((data) => setSinglePost(data[0]))
      .catch(console.error);
  }, [slug]);

  if(!singlePost) return <div>Loading...</div>

  return (
    <main>
      <section>
        <h1>single posts</h1>
        <div>
            <article>
                <span>
                  <img
                    src={urlFor(singlePost.mainImage).width(200).url()}
                    alt={singlePost.mainImage.alt}
                  />
                  <span>
                    <h3>{singlePost.title}</h3>
                  </span>
                </span>
                <div>
                    <BlockContent blocks={singlePost.body} projectId='bz8z0oa1' dataset='production'/>
                </div>
            </article>
        </div>
      </section>
    </main>
  );
}
