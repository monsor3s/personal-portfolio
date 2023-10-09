import ProgressBar from "../../objects/ProgressBar";
import SubTitle from "../../objects/SubTitle";
import Title from "../../objects/Title";

import { ContainerSkill, Skill, TitleProgressBar, WrapperProgressBar, WrapperSkill } from "./style";

export default function SkillContainer() {
  return (
    <>
      <Skill>
        <ContainerSkill>
          <WrapperSkill>
            <Title>I have high skills in developing and progamming</Title>
            <SubTitle>I am working on a professional, visually sophisticated and technologically proficient, responsive and multi-functional personal portfolio template Shane.</SubTitle>
          </WrapperSkill>
          <WrapperSkill>
            <div>
              <WrapperProgressBar>
                <TitleProgressBar>Web development</TitleProgressBar>
                <TitleProgressBar>90%</TitleProgressBar>
              </WrapperProgressBar>
              <ProgressBar style={{ width: '90%' }} />
            </div>
            <div>
              <WrapperProgressBar>
                <TitleProgressBar>Design</TitleProgressBar>
                <TitleProgressBar>70%</TitleProgressBar>
              </WrapperProgressBar>
              <ProgressBar style={{ width: '70%' }} />
            </div>
            <div>
              <WrapperProgressBar>
                <TitleProgressBar>Brand Identity</TitleProgressBar>
                <TitleProgressBar>50%</TitleProgressBar>
              </WrapperProgressBar>
              <ProgressBar style={{ width: '50%' }} />
            </div>
          </WrapperSkill>  
        </ContainerSkill>
      </Skill>
    </>
  )
}
