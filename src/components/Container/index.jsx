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
        <SectionHome>
          <ContentBody />
          <PhotoProfileContent />
        </SectionHome>
        <SectionAbout>
          <AboutContainer />
        </SectionAbout>
        <SectionProject>
          <ProjectContainer />
        </SectionProject>
        <SectionSkills>
          <SkillContainer />
        </SectionSkills>
        <SectionContact>
          <ContactContainer />
        </SectionContact>
        <SectionFooter>
          <FooterContainer />
        </SectionFooter>
      </MainContainer>
    </>
  )
}
