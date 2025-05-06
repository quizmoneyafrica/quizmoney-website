import React from "react";
import FaqHeroSection from "../components/pages/faq/FaqHeroSection";
import FaqListing from "../components/pages/faq/FaqListing";
import Cta from "../components/pages/faq/Cta";

function Page() {
  return (
    <div>
      <FaqHeroSection />
      <FaqListing />
      <Cta />
    </div>
  );
}

export default Page;
