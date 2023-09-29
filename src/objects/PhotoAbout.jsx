import styled from "styled-components"
import PictureAbout from '../assets/photoAbout.jpeg'

export const PhotoAboutMain = styled.div`
  width: 510px;
  height: 510px;
  box-sizing: border-box;
  background-image: url(${({ background }) => background});
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: 0 0 40px rgb(0 0 0/20%);
`

export function PhotoAbout() {
  return (
    <>
      <PhotoAboutMain background={PictureAbout} />
    </>
  )
}
