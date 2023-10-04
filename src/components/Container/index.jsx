import {
  MainContainer, 
  SectionAbout, 
  SectionHome, 
  SectionProject
} from "./style"

import PhotoProfileContent from "../../objects/PhotoProfileContent"
import ContentBody from "../ContentBody"
import AboutContainer from "../AboutContainer"
import ProjectContainer from "../ProjectContainer"


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
      </MainContainer>
    </>
  )
}
