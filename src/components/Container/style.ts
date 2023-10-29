import styled from "styled-components"

export const MainContainer = styled.div`
  position: relative;
  width: 100%;
  height: auto;
`

export const SectionHome = styled.section`
  position: relative;
  display: flex;
  align-items: center;

  @media (max-width: 480px) {
    height: 100vh;
    flex-direction: column;
  }
`

export const SectionAbout = styled.section`
  width: 100%;
  height: auto;
`

export const SectionProject = styled.section`
  width: 100%;
  height: auto;
`

export const SectionSkills = styled.section`
  width: 100%;
  height: 450px;
  display: flex;
  align-items: center;
`

export const SectionContact = styled.section`
  width: 100%;
  height: 600px;
  box-sizing: border-box;

  @media (max-width: 1024px) {
    height: 500px;
  }

  @media (max-width: 480px) {   
    height: 320px;
  }
`;

export const SectionFooter = styled.section`
  width: 100%;
  height: auto;
  box-sizing: border-box;
`;