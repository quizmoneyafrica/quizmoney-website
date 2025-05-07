"use client";
import PageLayout from "@/app/layout/pageLayout";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { Divide as Hamburger } from "hamburger-react";
import { motion } from "framer-motion";
import { data } from "@/app/data/content";
import { usePathname } from "next/navigation";
import useAppLink from "@/app/hooks/AppDownload";

interface IHeaderProps {
	title?: string;
}
const menuVariants = {
	open: {
		opacity: 1,
		y: 1,
		transition: {
			type: "spring",
			stiffness: 300,
			damping: 24,
		},
	},
	closed: {
		opacity: 0,
		y: "-150%",
		transition: {
			type: "spring",
			stiffness: 300,
			damping: 24,
		},
	},
};

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
	const {} = props;
	const pathName = usePathname();
	const [openMenu, setOpenMenu] = React.useState<boolean>(false);
	const appLink = useAppLink();
	return (
		<>
			<header
				data-aos="fade-down"
				className="relative top-0 z-50  max-w-screen-xl w-full mx-auto p-4 ">
				<motion.div
					animate
					className={`bg-primary-900 py-2 md:py-4 lg:px-10 ${
						openMenu ? "rounded-t-2xl" : "rounded-full shadow-lg"
					} w-full`}>
					<PageLayout>
						<nav className="flex items-center justify-between">
							<Link href="/" className="w-16 lg:w-20">
								<Image
									src="/logo.svg"
									alt="Quiz Money Logo"
									width={56}
									height={30.4}
									priority
									className="object-contain h-full w-full"
								/>
							</Link>

							<div className="hidden lg:block">
								<ul className="flex items-center justify-center gap-10">
									{data.headerNav.map((nav, index) => {
										const isActive = pathName === nav.url;
										return (
											<li key={index} className="relative">
												<Link
													className={`block py-3 text-center text-nowrap transition-all ${
														isActive ? "text-secondary-500" : "text-white"
													}`}
													href={nav.url}>
													{nav.text}
												</Link>
												{isActive && (
													<motion.div
														layoutId="activeIndicator"
														className="absolute left-1/2 -translate-x-1/2 bottom-0 w-2 h-2 bg-secondary-500 rounded-full"
														transition={{
															type: "spring",
															stiffness: 500,
															damping: 30,
														}}
													/>
												)}
											</li>
										);
									})}
								</ul>
							</div>

							<Link
								href={appLink}
								target="_blank"
								className="hidden lg:flex items-center gap-2 bg-white text-primary-900 font-medium py-2 px-4 rounded-full">
								<span>Get Started</span>{" "}
								<span className="relative">
									<i className="bi bi-arrow-right-circle"></i>
									<i className="bi bi-arrow-right-circle absolute left-0 animate-ping"></i>
								</span>
							</Link>

							{/* Mobile Hamburger  */}
							<button className="lg:hidden">
								<Hamburger
									size={32}
									color="#F9F9F9"
									toggled={openMenu}
									toggle={setOpenMenu}
									rounded
									label="Show menu"
									easing="ease-in"
								/>
							</button>
						</nav>

						{/* Animated Menu */}
						<motion.nav
							initial="closed"
							animate={openMenu ? "open" : "closed"}
							variants={menuVariants}
							className={`absolute ${
								openMenu
									? "z-50 rounded-b-2xl shadow-2xl border-t border-white border-opacity-20"
									: "z-0"
							} top-full left-0 w-full bg-primary-900 text-white`}>
							<ul className="pt-4">
								{data.headerNav.map((nav, index) => {
									return (
										<li key={index} className="w-full">
											<Link
												className="block hover:bg-primary-800 w-full py-3 text-center"
												href={nav.url}
												onClick={() => setOpenMenu(false)}>
												{nav.text}
											</Link>
										</li>
									);
								})}
								<li className="flex items-center justify-center hero py-4 rounded-b-2xl">
									<Link
										href={appLink}
										target="_blank"
										className="inline-flex items-center gap-2 bg-white text-primary-900 font-medium py-2 px-4 rounded-full">
										<span>Get Started</span>{" "}
										<i className="bi bi-arrow-right-circle"></i>
									</Link>
								</li>
							</ul>
						</motion.nav>
					</PageLayout>
				</motion.div>
			</header>
		</>
	);
};

export default Header;
