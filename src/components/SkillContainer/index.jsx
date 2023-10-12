import ProgressBar from "../../objects/ProgressBar";
import Title from "../../objects/Title";

import { ContainerSkill, Skill, SubTitleSkill, TitleProgressBar, WrapperProgressBar, WrapperSkill } from "./style";

export default function SkillContainer() {
  return (
    <>
      <Skill>
        <ContainerSkill>
          <WrapperSkill>
            <Title>I have high skills in developing and progamming</Title>
            <SubTitleSkill>I am a highly motivated front-end developer with a passion for creating exceptional user experiences. I have a solid background in web development, mastering the latest technologies and industry standards. My passion for front-end programming is evident in my attention to detail and relentless pursuit of performance optimization, usability and design.</SubTitleSkill>
          </WrapperSkill>
          <WrapperSkill>
            <div>
              <WrapperProgressBar>
                <TitleProgressBar>CSS</TitleProgressBar>
                <TitleProgressBar>95%</TitleProgressBar>
              </WrapperProgressBar>
              <ProgressBar style={{ width: '95%' }} />
            </div>
            <div>
              <WrapperProgressBar>
                <TitleProgressBar>JavaScript</TitleProgressBar>
                <TitleProgressBar>85%</TitleProgressBar>
              </WrapperProgressBar>
              <ProgressBar style={{ width: '85%' }} />
            </div>
            <div>
              <WrapperProgressBar>
                <TitleProgressBar>React</TitleProgressBar>
                <TitleProgressBar>70%</TitleProgressBar>
              </WrapperProgressBar>
              <ProgressBar style={{ width: '70%' }} />
            </div>
            <div>
              <WrapperProgressBar>
                <TitleProgressBar>Figma</TitleProgressBar>
                <TitleProgressBar>80%</TitleProgressBar>
              </WrapperProgressBar>
              <ProgressBar style={{ width: '80%' }} />
            </div>
            <div>
              <WrapperProgressBar>
                <TitleProgressBar>Design</TitleProgressBar>
                <TitleProgressBar>75%</TitleProgressBar>
              </WrapperProgressBar>
              <ProgressBar style={{ width: '75%' }} />
            </div>
          </WrapperSkill>  
        </ContainerSkill>
      </Skill>
    </>
  )
}
