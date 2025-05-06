import PageLayout from "@/app/layout/pageLayout";
import React from "react";
import { SectionHeader } from "../../SectionHeader";
import { data } from "@/app/data/content";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

function HowItWorks() {
	return (
		<>
			<PageLayout>
				<section className="py-16 space-y-6 lg:py-20">
					<div className="text-center mx-auto lg:w-[100%]">
						<SectionHeader
							topText="Get familiar with Quiz Money"
							topClassName="bg-primary-50 text-primary-900"
							title="How it works"
							titleClassName="text-primary-900 font-bold"
							contentText={`Don't see your questions here? Get in touch`}
							contentTextClassName="lg:w-[50%] mx-auto   "
						/>
					</div>

					<div className="grid grid-cols-1 gap-y-6 gap-x-4 lg:grid-cols-3">
						{data.how.map((item, index) => {
							return (
								<HowItWorksBox key={index} index={index + 1} data={item} />
							);
						})}
					</div>
				</section>
			</PageLayout>
		</>
	);
}

export default HowItWorks;
const indexColors: { [key: string]: string } = {
	"primary-900": "bg-primary-900 text-primary-900 bg-primary-50",
	"positive-900": "bg-positive-900 text-positive-900 bg-positive-50",
	"secondary-900": "bg-secondary-900 text-secondary-900 bg-secondary-50",
	"info-900": "bg-info-900 text-info-900 bg-info-50",
	"warning-700": "bg-warning-700 text-warning-700 bg-warning-50",
	"neutral-900": "bg-neutral-900 text-neutral-900 bg-neutral-50",
};

type HowProps = {
	title: string;
	content: string;
	img: StaticImport;
	indexColor: string;
};
type Props = {
	data: HowProps;
	index: number;
};

const HowItWorksBox = (props: Props) => {
	const { data, index } = props;
	return (
		<div
			className={`${
				indexColors[data.indexColor]?.split(" ")[2]
			} p-6 space-y-6 rounded-2xl`}>
			<div
				className={`w-[50px] h-[50px] rounded-full ${
					indexColors[data.indexColor]?.split(" ")[0]
				} grid place-items-center font-bold text-white text-xl`}>
				<span>{index}</span>
			</div>
			<h3
				className={`${
					indexColors[data.indexColor]?.split(" ")[1]
				} font-bold text-xl`}>
				{data.title}
			</h3>
			<p className={`${indexColors[data.indexColor]?.split(" ")[1]}`}>
				{data.content}
			</p>
			<Image
				src={data.img}
				alt="Quiz Money africa"
				width={365}
				height={82}
				className="w-full"
				priority
				quality={100}
			/>
		</div>
	);
};
