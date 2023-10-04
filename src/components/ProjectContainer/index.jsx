import TitleSection from "../../objects/TitleSection";
import Title from "../../objects/Title";
import SubTitle from "../../objects/SubTitle";
import ItemTechProject from "../../objects/ItemTechProject";
import LogoProject from "../../objects/LogoProject";
import ScreenshotProject from "../../objects/ScreenshotProject";
import IntroDesktopPicture from "../../assets/IntroDeskPicture.png"
import IntroMobilePicture from "../../assets/IntroMobilePicture.png"
import {  
  CardProject,
  CardProjectContainer, 
  ContainerScreenshot, 
  Project, 
  ScreenshotProjectMobile, 
  SubTitleProject,
  TitleProject,
  WrapperProject
} from "./style";


export default function ProjectContainer() {
  return (
    <Project>
      <TitleSection>projects</TitleSection>
      <Title>Lasted Projects</Title>
      <CardProjectContainer>
        <ContainerScreenshot>
          <ScreenshotProject src={IntroDesktopPicture} />
          <ScreenshotProjectMobile src={IntroMobilePicture} />
        </ContainerScreenshot>
        <CardProject>
          <LogoProject src="https://raw.githubusercontent.com/monsor3s/intro-section/9d643b9567b786373ea49b0ba20d7c42ec70fe01/img/logo.svg" alt="Logo Project" />
          <TitleProject>Intro section</TitleProject>
          <SubTitle> It is the solution to Frontend Mentor challenge with responsiveness, dropdown menus and navigation menu </SubTitle>
            <WrapperProject>
              <SubTitleProject>Tecnnologies</SubTitleProject>
              <div>
                <ItemTechProject>JavaScript</ItemTechProject>
                <ItemTechProject>RSCSS</ItemTechProject>
              </div>
            </WrapperProject>
            <WrapperProject>  
              <SubTitleProject>Duration</SubTitleProject>
              <SubTitle>4 Weeks</SubTitle>
            </WrapperProject>
            <WrapperProject>  
              <SubTitleProject>Role</SubTitleProject>
              <SubTitle>Landing page</SubTitle>
            </WrapperProject>
        </CardProject>
      </CardProjectContainer>
    </Project>
  )
}
