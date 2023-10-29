import styled from 'styled-components';
import Wrapper from '../../objects/Wrapper';
import Title from '../../objects/Title';


export const Contact = styled.div`
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  height: inherit;
`;

export const EffectPaper = styled.img`
  width: 100%;
  box-sizing: border-box;
  transform: rotateX(180deg);
  position: absolute;

  `
export const VideoBackground = styled.video`
  width: 100%;
  padding-top: 5px;
  box-sizing: border-box;
  object-fit: cover;
  z-index: 1;

  @media (max-width: 768px) {  
    height: 100%;
  }

`;

export const WrapperContact = styled(Wrapper)`
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  top: 50%;
  text-align: center;

  @media (max-width: 480px) {   
    
  }
  
`;

export const WrapperLinks = styled.div`
  display: flex;
  justify-content: center;
`

export const TitleContact = styled(Title)`
  font-size: 72px;
  color: #fff;
  font-weight: 800;
  z-index: 2;

  @media (max-width: 480px) {
    font-size: 40px;
    padding: 10px;
  }
`;

export const LinkContainer = styled.div`
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    transition: all 0.5s;
  }
`

export const LinkIcon = styled.a`
  padding: 10px;
`;



