import React from "react"
import { graphql, Link } from "gatsby"
//import Layout from "../components/layout";

export default ({ data }) => {
  console.log(data)
  return (
    <div>
      <ul>
        {data.allTutorialsYaml.edges.map(({ node }) => (
          <li key={node.id}>
            <Link to={node.slug}>{node.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export const query = graphql`
  {
    allTutorialsYaml {
      edges {
        node {
          id
          name
          courseId
          author
          description
          slug
        }
      }
    }
  }
`
