import React, { useState } from "react";
import styled from "styled-components";

import { TitleSection } from "../styles";
import themesColors from "../../../common/constants/themesColors";
import getRandomOnArray from "../../../common/utils/getRandomOnArray";

const SectionWrapper = styled.section`
  line-height: 1.5rem;

  & strong {
    color: ${(props) => props.themeColor ?? "white"};
  }
`;

const TechList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 1.5rem 0 3rem 15px;

  display: grid;
  grid-template-columns: repeat(2, minmax(150px, 10px));

  > * {
    position: relative;
    padding-left: 4px;

    :before {
      content: "▹ ";
      position: absolute;
      left: -15px;
      color: ${(props) => props.themeColor ?? "white"};
    }
  }
`;

function AboutSection() {
  let [themeColor, setThemeColor] = useState([themesColors[1]]);

  return (
    <SectionWrapper themeColor={themeColor} className="mt-5 row">
      <div className="col-12 ">
        <TitleSection
          themeColor={themeColor}
          onClick={() => setThemeColor(getRandomOnArray(themesColors))}
        >
          about
        </TitleSection>
      </div>
      <main className="col-md-8">
        <p>
          i am professional web developer with{" "}
          <strong>1 + year experience in web development</strong>.I'm constantly
          developing and learning new technologies in IT.
        </p>
        <p>
          The Front-End development is where{" "}
          <strong>i feel 100% comfortable</strong>, but i'm really into any way
          of development that i can use my <strong>creativity</strong> and{" "}
          <strong>problem solving skills</strong>.
        </p>
        <span>Here are some technologies I have been working with:</span>

        <TechList themeColor={themeColor}>
          <li>Html 5</li>
          <li>Javascript</li>
          <li>Css 3</li>
          <li>React JS</li>
          <li>Boostrap 5</li>
          <li>Next JS</li>
          <li>Tailwind Css</li>
          <li>Redux</li>
          <li>Sass</li>
          <li>Vue JS</li>
        </TechList>
      </main>
    </SectionWrapper>
  );
}

export default AboutSection;
