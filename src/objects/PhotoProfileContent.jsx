import styled from "styled-components"
import PictureProfile from '../assets/perfilbackground2.png'

export const PhotoProfile = styled.div`
  position: relative;
  width: 50%;
  max-height: 100%;
  height: 928px;
  box-sizing: border-box;
  background-image: url(${({ background }) => background});
  background-repeat: no-repeat;
  background-size: cover;
  clip-path: polygon(0% 100%,21% 0%,100% 0%,100% 100%);
  object-fit: contain;
  
  @media (max-width: 768px) {
    height: 700px;
  }

  @media (max-width: 480px) {
    width: 100%;
    clip-path: none;
    
  }
`



export default function PhotoProfileContent() {
  return (
    <>
      <PhotoProfile background={PictureProfile} />
    </>
  )
}
