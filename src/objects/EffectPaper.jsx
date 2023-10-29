import styled from "styled-components"
import PictureEffectPaper from "../assets/paper.svg"

export const Paper = styled.div`
  width: 100%;
  height: 20px;
  box-sizing: border-box;
  transform: rotateX(180deg);
  position: absolute;
  background-image: url(${({ background }) => background});
  background-repeat: no-repeat;
  background-size: cover;
  object-fit: contain;
  
`

export default function EffectPaper() {
  return (
    <Paper background={PictureEffectPaper} />
  )
}
