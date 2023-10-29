import styled from "styled-components"
// import PictureAbout from '../assets/photoAbout.jpeg'
import PictureAbout from '../assets/IMG_7204.png'

export const PhotoAboutMain = styled.div`
  width: 510px;
  height: 510px;
  box-sizing: border-box;
  background-image: url(${({ background }) => background});
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: 0 0 40px rgb(0 0 0/20%);

  @media (max-width: 480px) {
    width: inherit;
  }
`

export function PhotoAbout() {
  return (
    <>
      <PhotoAboutMain background={PictureAbout} />
    </>
  )
}
