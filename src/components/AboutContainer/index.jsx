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
            <SubTitle>Hi, Im a passionate web design and development enthusiast who specializes in creating exceptional digital experiences. With 2 years of experience in the field, my journey in front-end development has allowed me to transform code into engaging and functional interfaces.</SubTitle>
            <Button><a href="/Curriculo_Marlon_Monsores.pdf" download>Donwload CV</a></Button>
          </WrapperAbout>
        </ContainerAbout>
      </About>
    </>
  )
}
