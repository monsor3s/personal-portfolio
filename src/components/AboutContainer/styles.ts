import styled from 'styled-components';

export const About = styled.div`
  max-width: 1200px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  height: auto;
  padding: 0 40px;
  position: relative;

  @media (max-width: 1024px) {
    padding: 0;
  }

  @media (max-width: 375px) {
    padding-top: 30px;
  }
`

export const ContainerAbout = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  padding: 150px 40px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  
  @media (max-width: 480px) {
    flex-direction: column;
    padding: 20px 40px ;
  }

  @media (max-width: 375px) {
    padding: 20px;
  }
  `

export const WrapperAbout = styled.div`
  width: 50%;
  height: 470px;
  padding-left: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

    @media (max-width: 1200px) {
      padding: 0 30px;
    }

    @media (max-width: 480px) {
      padding: 0;
      width: 100%;
    }

    @media (max-width: 375px) {
      padding-top: 20px;
    }
`