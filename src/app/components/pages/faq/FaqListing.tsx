import React from "react";
import { data } from "@/app/data/content";
import FaqsComponent from "../../faqsComponent";
import PageLayout from "@/app/layout/pageLayout";

export default function FaqListing() {
  return (
    <PageLayout>
      <section className="py-16 space-y-6 lg:py-20">
        <div>
          <FaqsComponent items={data.faq} />
        </div>
      </section>
    </PageLayout>
  );
}
