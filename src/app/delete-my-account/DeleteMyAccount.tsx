import Link from "next/link";
import React from "react";

function DeleteMyAccount() {
	return (
		<>
			<div>
				<h1>Delete my Account</h1>
				<p>Send a message using our contact form</p>
				<Link
					href="/contact"
					target="_blank"
					className="hidden lg:flex items-center gap-2 bg-primary-900 text-white font-medium py-2 px-4 rounded-full">
					<span>Contact</span>
					<span className="relative">
						<i className="bi bi-arrow-right-circle"></i>
						<i className="bi bi-arrow-right-circle absolute left-0 animate-ping"></i>
					</span>
				</Link>
			</div>
		</>
	);
}

export default DeleteMyAccount;
