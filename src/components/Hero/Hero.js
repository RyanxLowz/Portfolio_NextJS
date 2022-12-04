import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Ryan Low <br />
        Portfolio
      </SectionTitle>
      <SectionText>Tech Enthusiast | Aspiring Software Engineer </SectionText>
      <Button onclick={() => {}}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;
