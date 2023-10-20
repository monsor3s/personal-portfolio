import styled from 'styled-components';
import ScreenshotProject from '../../objects/ScreenshotProject';
import Title from '../../objects/Title';
import LogoProject from '../../objects/LogoProject';

export const SectionCard = styled.section`
  
`
export const CardProjectContainer = styled.div`
  position: relative;
  width: 1184px;
  height: 510px;
  background-color: rgba(0,0,0,.05);
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px auto 40px auto;  

  @media (max-width: 1200px) {
    width: 1024px;
  }
`

export const ContainerScreenshot = styled.a`
  position: relative;
  width: 50%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 20px 40px 40px;
  transition-duration: 300ms; 
  transition-timing-function: cubic-bezier(0, 0, 0.2, 1); 
  text-decoration: none;
  
  
  &:hover {
    cursor: pointer; 
    transform: scaleX(1.02) scaleY(1.02);
    }
  
  @media (max-width: 1200px) {
    max-width: inherit;
    padding: 40px;
  }

`

export const ScreenshotProjectAdvice = styled(ScreenshotProject)`
  position: relative;
  width: 665px;

`

export const ScreenshotProjectMobile = styled(ScreenshotProject)`
  position: relative;
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
  color: #000;

  &:hover {
    color: rgb(202 254 0);
    opacity: 0.50;
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
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