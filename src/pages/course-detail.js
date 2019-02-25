import React from "react"
import { graphql } from "gatsby"

export default ({ data }) => {
  console.log(data)
  return (
    <div>
      <h1>{data.tutorialsYaml.name}</h1>
      <p>{data.tutorialsYaml.description}</p>
    </div>
  )
}

export const query = graphql`
  query($slug: String!) {
    tutorialsYaml(slug: { eq: $slug }) {
      id
      description
      slug
      author
      courseId
      name
    }
  }
`
