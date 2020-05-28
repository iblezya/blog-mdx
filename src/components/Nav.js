import React from "react"
import { NavWrapper } from "../elements"
import { graphql, Link, useStaticQuery } from "gatsby"

export const Nav = () => {
  const data = useStaticQuery(graphql`
    query {
      nav: file(relativePath: { eq: "nav.svg" }) {
        publicURL
      }
    }
  `)

  return (
    <NavWrapper>
      <Link to="/">
        <img src={data.nav.publicURL} alt="Nav"  />
      </Link>
    </NavWrapper>
  )
}
