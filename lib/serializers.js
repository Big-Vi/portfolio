import React from 'react'
import Photo from '@components/photo'
import CustomLink from '@components/link'
import Refractor from 'react-refractor'
import YouTube from 'react-youtube'
import getYouTubeId from 'get-youtube-id'

export const components = {
  block: {
    blockquote: ({children}) => <blockquote className="border-l-purple-500">{children}</blockquote>,
  },
  types: {
    image: ({ value }) => 
      <Photo photo={value} />,
    youtube: ({ value }) => {
      const { url } = value
      const id = getYouTubeId(url)
      return (<YouTube videoId={id} />)
    },
    callToAction: ({value, isInline}) =>
      isInline ? (
        <a href={value.url}>{value.text}</a>
      ) : (
        <div className="callToAction">{value.text}</div>
      ),
  },

  marks: {
    code: ({value, children}) => {
     return <Refractor language={'js'} value={children[0]} />
    },
    link: ({children, value}) => {
      return <CustomLink link={{ ...value, ...{ title: children[0] } }} />
    },
  },
}