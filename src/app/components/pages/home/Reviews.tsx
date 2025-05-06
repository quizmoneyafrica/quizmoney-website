"use client";
import PageLayout from "@/app/layout/pageLayout";
import React from "react";
import { SectionHeader } from "../../SectionHeader";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { data } from "@/app/data/content";

function Reviews() {
	return (
		<section className="bg-neutral-900">
			<PageLayout>
				<div className="py-16 space-y-10 lg:py-20">
					<div className="text-center mx-auto lg:w-[100%]">
						<SectionHeader
							topText="Users Reviews"
							topClassName="bg-primary-50 text-primary-900 font-medium mx-auto lg:max-w-[18%]"
							title="Users ❤ for Quiz Money"
							titleClassName="text-primary-50 font-bold"
							contentText={`Amazing reviews from Quiz money app users.`}
							contentTextClassName="lg:w-[50%] mx-auto text-neutral-400"
						/>
					</div>

					<div className="grid grid-cols-1 gap-y-6 md:grid-cols-2 gap-x-4 lg:grid-cols-4">
						{data.reviews.map((item, index) => {
							return <ReviewsBox key={index} data={item} />;
						})}
					</div>
				</div>
			</PageLayout>
		</section>
	);
}

export default Reviews;

type PropsContent = {
	img: StaticImport;
	name: string;
	review: string;
};
type Props = {
	data: PropsContent;
};

const ReviewsBox = (props: Props) => {
	const { data } = props;
	return (
		<div className="p-6 border space-y-6 border-[#EAE9F2] bg-neutral-800 rounded-2xl">
			<div className="flex items-start justify-between">
				<div className="flex gap-2 items-start">
					<div className="rounded-full h-[41px] w-[41px]">
						<Image
							src={data.img}
							alt="Quiz money reviews"
							quality={100}
							priority
							width={41}
							height={41}
							onContextMenu={(e) => e.preventDefault()}
							className="w-full h-full object-cover overflow-clip rounded-full"
						/>
					</div>
					<div className="text-neutral-50">
						<p className="font-bold">{data.name}</p>
						<span className="text-sm">Quizmoney User</span>
					</div>
				</div>
				<div>
					<i className="bi bi-twitter-x text-primary-500 text-xl"></i>
				</div>
			</div>
			<div className="text-neutral-50">
				<p>{data.review}</p>
			</div>
		</div>
	);
};
