import React from "react";

import TextCarousel from "./components/TextCarousel";

export const LandingPage = props => (
  <div>
    <TextCarousel
      className={"landing-page-carousel"}
      rotatedText={["test", "test2", "test3"]}
      delay={2000}
    />
  </div>
);

export default LandingPage;
