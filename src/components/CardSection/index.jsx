import LogoProject from "../../objects/LogoProject";
import ScreenshotProject from "../../objects/ScreenshotProject";
import SubTitle from "../../objects/SubTitle";
import IntroDesktopPicture from "../../assets/introDeskPicture.png"
import IntroMobilePicture from "../../assets/introMobilePicture.png"
import { 
  CardProject, 
  CardProjectContainer, 
  ContainerScreenshot, 
  ItemTechProject, 
  LogoProjectAdvice, 
  ScreenshotProjectAdvice, 
  ScreenshotProjectMobile, 
  SectionCard, 
  SubTitleProject, 
  TitleProject, 
  WrapperProject 
} from "./style";

export default function CardSection() {
  return (
    <>
      <SectionCard>
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
        <CardProjectContainer>
          <ContainerScreenshot>
            <ScreenshotProjectAdvice src="https://raw.githubusercontent.com/monsor3s/advice-generator-app/master/src/assets/git-advice.gif" alt="Screenshot Advice API" />
          </ContainerScreenshot>
          <CardProject>
            <LogoProjectAdvice src="https://raw.githubusercontent.com/monsor3s/advice-generator-app/master/src/assets/logo-advice.png" alt="Logo Project Advice" />
            <TitleProject>Advice generator app</TitleProject>
            <SubTitle> This challenge uses the Advice Slip API to generate random quotes of advice.</SubTitle>
              <WrapperProject>
                <SubTitleProject>Tecnnologies</SubTitleProject>
                <div>
                  <ItemTechProject>vitejs</ItemTechProject>
                  <ItemTechProject>react</ItemTechProject>
                  <ItemTechProject>sass</ItemTechProject>
                </div>
              </WrapperProject>
              <WrapperProject>  
                <SubTitleProject>Duration</SubTitleProject>
                <SubTitle>2 Weeks</SubTitle>
              </WrapperProject>
              <WrapperProject>  
                <SubTitleProject>Role</SubTitleProject>
                <SubTitle>Consumption of API</SubTitle>
              </WrapperProject>
          </CardProject>
        </CardProjectContainer>
      </SectionCard>
    </>
  )
}
