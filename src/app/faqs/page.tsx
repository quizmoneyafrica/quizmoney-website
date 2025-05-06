import React from "react";
import FaqHeroSection from "../components/pages/faq/FaqHeroSection";
import FaqListing from "../components/pages/faq/FaqListing";
import CtaSection from "../components/common/CtaSection";

function Page() {
  return (
    <div>
      <FaqHeroSection />
      <FaqListing />
      <CtaSection />
    </div>
  );
}

export default Page;
