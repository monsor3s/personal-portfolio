import styled from "styled-components"
import ContentBody from "../ContentBody"
import PhotoProfileContent from "../../objects/PhotoProfileContent"

export const MainContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
`

export default function Container() {
  return (
    <>
      <MainContainer>
        <ContentBody />
        <PhotoProfileContent />
      </MainContainer>
    </>
  )
}
