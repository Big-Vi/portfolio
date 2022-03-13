import React from 'react'
import Photo from '@components/photo'
import CustomLink from '@components/link'
import Refractor from 'react-refractor'

export const components = {
  block: {
    blockquote: ({children}) => <blockquote className="border-l-purple-500">{children}</blockquote>,
  },
  types: {
    code: ({value}) => <Refractor language={value.language || 'js'} value={value.code} />,
    image: ({ value }) => 
      <Photo photo={value} />,
    callToAction: ({value, isInline}) =>
      isInline ? (
        <a href={value.url}>{value.text}</a>
      ) : (
        <div className="callToAction">{value.text}</div>
      ),
  },

  marks: {
    link: ({children, value}) => {
      return <CustomLink link={{ ...value, ...{ title: children[0] } }} />
    },
  },
}