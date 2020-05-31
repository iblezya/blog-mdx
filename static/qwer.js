import React from "react"
import { Container, FeatureImage, Content, ContentCard } from "../components"

export const IndexPage = () => {
  return (
    <Container>
      <FeatureImage />
      <Content>
        <ContentCard
          date="Marzo 28,2020"
          title="Post Card"
          excerpt="Rastaraton fumaba sus tronchos antes de comer su queso.Era un ritual suyo que los demas ratones no entendian."
          slug="/test"
        />
      </Content>
    </Container>
  )
}
export default IndexPage
