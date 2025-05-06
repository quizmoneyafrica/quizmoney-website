"use client";
import * as React from "react";
import Header from "./components/header/header";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import AOS from "aos";
import Footer from "./components/footer/Footer";


interface IAppConfigProps {
	children: React.ReactNode;
}
interface CursorProps {
	x?: number;
	y?: number;
	scale?: number;
	opacity?: number;
	ease?: string;
}

const AppConfig: React.FunctionComponent<IAppConfigProps> = (props) => {
	const { children } = props;

	// Custom Cursor function
	function customCursor() {
		const cursor = document.getElementById("cursor");
		const hoverElements = document.querySelectorAll<HTMLAnchorElement>("a");

		// Helper function to animate the cursor with GSAP
		const animateCursor = (props: CursorProps) => {
			if (cursor) {
				gsap.to(cursor, {
					...props,
					duration: 0.3,
					ease: props.ease || "power2.out",
				});
			}
		};

		// Update cursor position on mouse move
		document.addEventListener("mousemove", (e) => {
			animateCursor({ x: e.clientX, y: e.clientY, opacity: 1 });
		});

		// Add hover effects for specified elements
		const addHoverEffects = (element: HTMLAnchorElement) => {
			element.addEventListener("mouseenter", () => {
				cursor?.classList.add("hovered");
				animateCursor({ scale: 2, opacity: 0 });
			});

			element.addEventListener("mouseleave", () => {
				cursor?.classList.remove("hovered");
				animateCursor({ scale: 1, opacity: 1 });
			});
		};

		// Apply hover effects to all elements in hoverElements
		hoverElements.forEach(addHoverEffects);
	}
	// Smooth Scroll
	function smoothScroll() {
		const lenis = new Lenis();
		lenis.on("scroll", ScrollTrigger.update);

		gsap.ticker.add((time) => {
			lenis.raf(time * 1000);
		});

		gsap.ticker.lagSmoothing(0);
	}

	React.useEffect(() => {
		customCursor();
		smoothScroll();
	}, []);

	React.useEffect(() => {
		AOS.init({
			duration: 1000,
			once: false,
			easing: "ease-in-out",
		})
	}, []);
	return (
		<>
			<Header />
			{children}
			<Footer/>
		</>
	);
};

export default AppConfig;
