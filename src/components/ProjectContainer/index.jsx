import TitleSection from "../../objects/TitleSection";
import Title from "../../objects/Title";

import { Project } from "./style";
import CardSection from "../CardSection";


export default function ProjectContainer() {
  return (
    <Project>
      <TitleSection>projects</TitleSection>
      <Title>Lasted Projects</Title>
      <CardSection />
    </Project>
  )
}
