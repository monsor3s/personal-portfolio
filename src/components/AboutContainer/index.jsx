import { PhotoAbout } from "../../objects/PhotoAbout";
import Title from "../../objects/Title";
import SubTitle from "../../objects/SubTitle";
import Button from "../../objects/Button";
import TitleSection from "../../objects/TitleSection";
import { 
  About, 
  ContainerAbout,
  WrapperAbout
} from "./styles";

export default function AboutContainer() { 

  return (
    <>
      <About>
        <ContainerAbout>
          <PhotoAbout />
          <WrapperAbout>
            <TitleSection>about me</TitleSection>
            <Title>Creative web designer located in Rio de Janeiro, BR.</Title>
            <SubTitle>Im web designer, and Im very passionate and dedicated to my work. With 20 years experience as a professional web developer, I have acquired the skills and knowledge necessary to make your project a success. I enjoy every step of the design process, from discussion and collaboration.</SubTitle>
            <Button><a href="/Curriculo_Marlon_Monsores.pdf" download>Donwload CV</a></Button>
          </WrapperAbout>
        </ContainerAbout>
      </About>
    </>
  )
}
