import styled from 'styled-components';
import Wrapper from '../../objects/Wrapper';
import SubTitle from '../../objects/SubTitle';

export const Skill = styled.div`
  width: 100%;
  height: auto;
`

export const ContainerSkill = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  padding: 40px 200px;
  box-sizing: border-box;
  `

export const WrapperSkill = styled(Wrapper)`
  width: 50%;
  height: auto;
`

export const SubTitleSkill = styled(SubTitle)`
  padding: 10px 10px 10px 0;
`

export const WrapperProgressBar = styled(Wrapper)`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;


export const TitleProgressBar = styled.span`
  font-size: 15px;
  line-height: 30px;
  letter-spacing: .5px;
`;


