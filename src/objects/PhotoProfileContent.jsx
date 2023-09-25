import styled from "styled-components"
import PictureProfile from '../assets/perfilbackground.png'

export const PhotoProfile = styled.div`
  width: 50%;
  height: 100%;
  box-sizing: border-box;
  background-image: url(${({ background }) => background});
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
`

// export const ContainerPhoto = styled.div`
//   /* width: 100%;
//   height: 100%; */
//   clip-path: polygon(0% 100%,21% 0%,100% 0%,100% 100%);
// `

export default function PhotoProfileContent() {
  return (
    <>
        <PhotoProfile background={PictureProfile} />
    </>
  )
}
