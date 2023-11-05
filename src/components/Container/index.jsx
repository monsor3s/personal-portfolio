import {
  MainContainer, 
  SectionAbout, 
  SectionContact, 
  SectionFooter, 
  SectionHome, 
  SectionProject,
  SectionSkills
} from "./style"

import PhotoProfileContent from "../../objects/PhotoProfileContent"
import ContentBody from "../ContentBody"
import AboutContainer from "../AboutContainer"
import ProjectContainer from "../ProjectContainer"
import SkillContainer from "../SkillContainer"
import ContactContainer from "../ContactContainer"
import FooterContainer from "../FooterContainer"

export default function Container() {
  

  return (
    <>
      <MainContainer>
        <SectionHome id="/">
          <ContentBody />
          <PhotoProfileContent />
        </SectionHome>
        <SectionAbout id="about">
          <AboutContainer />
        </SectionAbout>
        <SectionProject id="project">
          <ProjectContainer />
        </SectionProject>
        <SectionSkills>
          <SkillContainer />
        </SectionSkills>
        <SectionContact id="contact">
          <ContactContainer />
        </SectionContact>
        <SectionFooter>
          <FooterContainer />
        </SectionFooter>
      </MainContainer>
    </>
  )
}
