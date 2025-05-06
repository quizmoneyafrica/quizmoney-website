import React from "react";
import { SectionHeader } from "../../SectionHeader";
import Image from "next/image";
import PageLayout from "@/app/layout/pageLayout";
import { data } from "@/app/data/content";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

function Features() {
	return (
		<>
			<PageLayout>
				<section className="py-16 space-y-6 lg:py-20">
					<div className="text-center mx-auto lg:w-[70%]">
						<SectionHeader
							topText="Features Of The App"
							topClassName="bg-primary-50 text-primary-900"
							title="Experience Endless Excitement"
							titleClassName="text-primary-900 font-bold"
							contentText="Dive into a world of challenges and rewards with our game's unique features."
							contentTextClassName=""
						/>
					</div>

					<div className="grid gap-y-6 gap-x-5 grid-cols-1 lg:grid-cols-5">
						{data.features.map((item, index) => {
							let extraClasses = "";

							if (index === 0) {
								extraClasses = "lg:col-span-3";
							} else if (index === 1) {
								extraClasses = "lg:col-span-2";
							} else if (index === 2) {
								extraClasses = "lg:col-span-2";
							} else if (index === 3) {
								extraClasses = "lg:col-span-3";
							}

							return (
								<FeaturesBox key={index} data={item} className={extraClasses} />
							);
						})}
					</div>
				</section>
			</PageLayout>
		</>
	);
}

export default Features;

type FeatureItem = {
	icon: string;
	title: string;
	content: string;
	imgUrl: StaticImport;
	color: string;
};

type Props = {
	data: FeatureItem;
	className?: string;
};

const indexColors: { [key: string]: string } = {
	"neutral-900": "bg-neutral-900 text-neutral-900",
	"secondary-900": "bg-secondary-900 text-secondary-900",
	"info-900": "bg-info-900 text-info-900",
	"primary-800": "bg-primary-800 text-primary-800",
};

const FeaturesBox = (props: Props) => {
	const { data, className } = props;
	return (
		<div
			className={`${className} ${
				indexColors[data.color]?.split(" ")[0]
			} space-y-6 text-white p-6 rounded-2xl relative w-full min-h-[341px]`}>
			<div className="bg-white rounded-[8px] h-[48px] w-[50px] flex items-center justify-center">
				<i className={`bi bi-${data.icon} text-2xl ${indexColors[data.color]?.split(" ")[1]}`}></i>
			</div>
			<h3 className="font-bold text-2xl">{data.title}</h3>
			<p>{data.content}</p>

			<Image
				src={data.imgUrl}
				alt="Quiz Money - Mobile app"
				width={140}
				height={114.8}
				priority
				className="absolute bottom-0 right-1"
			/>
		</div>
	);
};
