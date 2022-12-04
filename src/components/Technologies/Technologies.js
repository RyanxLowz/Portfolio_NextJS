import React from "react";
import { DiFirebase, DiReact, DiZend } from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I have worked with a range of technologies in the web development world.
      From back-end to Design
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>Front-end</ListContainer>
        <ListParagraph>Experience with <br/> React.js</ListParagraph>
      </ListItem>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>Back-end</ListContainer>
        <ListParagraph>Experience with <br/> Spring Boot</ListParagraph>
      </ListItem>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>UI/UX</ListContainer>
        <ListParagraph>Experience with <br/> Figma</ListParagraph>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
