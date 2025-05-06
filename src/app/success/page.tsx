import React from "react";
import PageLayout from "../layout/pageLayout";
import Image from "next/image";

function Successful() {
	return (
		<PageLayout>
			<main className="flex flex-col items-center justify-center h-screen py-10 gap-4">
				<div className="w-36 h-36 rounded-full bg-primary-50">
					<Image
						src="/success.gif"
						alt="Quiz Money Success"
						width={180}
						height={180}
						priority
					/>
				</div>
				<div className="text-center">
					<h1 className="text-primary-900 text-3xl font-bold">
						Payment successful
					</h1>
					<p className="text-sm">You can return to app</p>
				</div>
			</main>
		</PageLayout>
	);
}

export default Successful;
