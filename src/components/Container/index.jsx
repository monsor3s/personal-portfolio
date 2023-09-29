import ContentBody from "../ContentBody"
import PhotoProfileContent from "../../objects/PhotoProfileContent"

import { 
  // AboutContainer, 
  MainContainer, 
  SectionAbout, 
  SectionHome 
} from "./style"
import AboutContainer from "../AboutContainer"


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
      </MainContainer>
    </>
  )
}
