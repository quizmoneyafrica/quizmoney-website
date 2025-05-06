import PageLayout from "@/app/layout/pageLayout";
import React from "react";
import { SectionHeader } from "../../SectionHeader";
import FaqsComponent from "../../faqsComponent";
import { data } from "@/app/data/content";

function Faqs() {
	return (
		<>
			<PageLayout>
				<section className="py-16 space-y-6 lg:py-20">
					<div className="text-center mx-auto lg:w-[100%]">
						<SectionHeader
							topText="Stay connected with us"
							topClassName="bg-primary-50 text-primary-900 font-medium mx-auto lg:max-w-[18%]"
							title="FAQs"
							titleClassName="text-primary-900 font-bold"
							contentText={`Frequently Asked Questions`}
							contentTextClassName="lg:w-[50%] mx-auto text-neutral-900"
						/>
					</div>
					<div>
						<FaqsComponent items={data.faq} limit={8} />
					</div>
				</section>
			</PageLayout>
		</>
	);
}

export default Faqs;
