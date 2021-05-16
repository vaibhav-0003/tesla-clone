import React from "react";
import styled from "styled-components";
import Section from "./Section";

import Fullpage, {
  FullPageSections,
  FullpageSection,
} from "@ap.cx/react-fullpage";

function Home() {
  return (
    <Container>
      <Fullpage>
        <FullPageSections>
          <FullpageSection>
            <Section
              title="Model S"
              description="Order Online for Touchless Delivery"
              background="model-s.jpg"
              leftBtnText="Custom Order"
              rightBtnText="Existing inventory"
              downArrow="true"
            />
          </FullpageSection>
          <FullpageSection>
            <Section
              title="Model Y"
              description="Order Online for Touchless Delivery"
              background="model-y.jpg"
              leftBtnText="Custom Order"
              rightBtnText="Existing inventory"
            />
          </FullpageSection>
          <FullpageSection>
            <Section
              title="Model 3"
              description="Order Online for Touchless Delivery"
              background="model-3.jpg"
              leftBtnText="Custom Order"
              rightBtnText="Existing inventory"
            />
          </FullpageSection>
          <FullpageSection>
            <Section
              title="Model X"
              description="Order Online for Touchless Delivery"
              background="model-x.jpg"
              leftBtnText="Custom Order"
              rightBtnText="Existing inventory"
            />
          </FullpageSection>
          <FullpageSection>
            <Section
              title="Lowest Cost Solar Pannels in America"
              description="Money-back guarantee"
              background="solar-panel.jpg"
              leftBtnText="Order now"
              rightBtnText="Learn more"
            />
          </FullpageSection>
          <FullpageSection>
            <Section
              title="Solar for New Roofs"
              description="Solar Roof Costs Less than a New Roof Plus Solat Panels"
              background="solar-roof.jpg"
              leftBtnText="Order now"
              rightBtnText="Learn more"
            />
          </FullpageSection>
          <FullpageSection>
            <Section
              title="Accessories"
              description=""
              background="accessories.jpg"
              leftBtnText="Shop now"
            />
          </FullpageSection>
        </FullPageSections>
      </Fullpage>
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;
