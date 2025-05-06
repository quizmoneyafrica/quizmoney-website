import React from "react";
import HowItWorksHeroSection from "../components/pages/how-it-works/HowItWorksHeroSection";
import StepToKnowHowAppWorks from "../components/pages/how-it-works/StepToKnowHowAppWorks";
import CtaSection from "../components/common/CtaSection";

function Page() {
  return (
    <div>
      <HowItWorksHeroSection />
      <StepToKnowHowAppWorks />
      <CtaSection />
    </div>
  );
}

export default Page;
