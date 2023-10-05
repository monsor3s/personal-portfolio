import styled from 'styled-components';
import ScreenshotProject from '../../objects/ScreenshotProject';
import Title from '../../objects/Title';
import LogoProject from '../../objects/LogoProject';

export const SectionCard = styled.section`
  
`
export const CardProjectContainer = styled.div`
  width: 1184px;
  height: 510px;
  background-color: rgba(0,0,0,.05);
  display: flex;
  align-items: center;
  margin: 20px auto 40px auto;
`

export const ContainerScreenshot = styled.div`
  width: 50%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 20px 40px 40px;
  transition-duration: 300ms; 
  transition-timing-function: cubic-bezier(0, 0, 0.2, 1); 
  
  &:hover {
    cursor: pointer; 
    transform: scaleX(1.02) scaleY(1.02);
    }
  
`
export const ScreenshotProjectMobile = styled(ScreenshotProject)`
  height: 370px;
  z-index: 1;
  margin-left: -70px;
    
`

export const CardProject = styled.div`
  padding: 40px 40px 40px 0;
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
`
export const TitleProject = styled(Title)`
  &:hover {
    color: rgb(202 254 0);
    opacity: 0.50;
    cursor: pointer;
  }
`

export const SubTitleProject = styled.span`
  color: #60a5fa;
  font-weight: bold;
  font-size: 16px;
  letter-spacing: 1.5px;
`

export const WrapperProject = styled.div`
  
  div {
    display: flex;
    gap: 15px;
  }
`

export const ItemTechProject = styled.p`
  width: auto;
  padding: 5px;
  font-size: 14px;
  background-color: #213229;
  color: #22c55e;
  text-align: center;
  text-transform: uppercase;
`

export const LogoProjectAdvice = styled(LogoProject)`
  width: 150px;
`