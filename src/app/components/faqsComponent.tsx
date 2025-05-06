"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type FaqItem = {
	question: string;
	answer: string;
};

type Props = {
	items: FaqItem[];
	limit?: number;
};

const FaqsComponent = ({ items, limit }: Props) => {
	const [openIndex, setOpenIndex] = useState<number | null>(null);

	const toggleIndex = (index: number) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	const displayedItems = limit ? items.slice(0, limit) : items;

	return (
		<div data-aos="fade-up" className="grid grid-cols-1 md:grid-cols-2 gap-6">
			{displayedItems.map((item, index) => {
				const isOpen = openIndex === index;
				return (
					<motion.div
						key={index}
						className={`border border-neutral-300 rounded-2xl p-4 bg-white shadow-sm`}>
						<motion.button
							onClick={() => toggleIndex(index)}
							className="flex justify-between items-center w-full text-left font-medium text-neutral-800">
							<span>{item.question}</span>
							<motion.span
								className="text-xl"
								animate={{ rotate: isOpen ? 180 : 0 }}
								transition={{ duration: 0.2 }}>
								{isOpen ? "−" : "+"}
							</motion.span>
						</motion.button>
						<AnimatePresence initial={false}>
							{isOpen && (
								<motion.div
									key="answer"
									initial={{ opacity: 0, height: 0 }}
									animate={{
										opacity: 1,
										height: openIndex === index ? "auto" : 0,
									}}
									exit={{ opacity: 0, height: 0 }}
									transition={{ duration: 0.3, ease: "easeInOut" }}
									className="overflow-hidden">
									<div className="mt-2 text-gray-700 text-base">
										{item.answer}
									</div>
								</motion.div>
							)}
						</AnimatePresence>
					</motion.div>
				);
			})}
		</div>
	);
};

export default FaqsComponent;
