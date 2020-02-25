import React from 'react'

import { Tag } from 'bloomer/lib/elements/Tag'
import { Delete } from 'bloomer/lib/elements/Delete'

const words = ['react', 'typescript', 'webpack', 'bulma', 'bloomer', 'gatsby']

const MyTag = () => {
  return (
    <>
      {words.map(word => (
        <Tag isColor="light">
          <a>{word}</a>
        </Tag>
      ))}
      <Tag isSize="medium">
        <span>MidiumTag</span> <Delete />
      </Tag>
      <Tag isSize="large">
        <span>BigTag</span> <Delete />
      </Tag>
    </>
  )
}

export default MyTag
