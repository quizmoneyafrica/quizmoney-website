import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans } from "next/font/google";
import "./globals.css";
import "lenis/dist/lenis.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "aos/dist/aos.css";
import AppConfig from "./appConfig";

const spacegrotesk = Space_Grotesk({
	variable: "--spacegrotesk",
	subsets: ["latin"],
});

const dmsans = DM_Sans({
	variable: "--dmsans",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: {
		template: "%s | Quiz Money",
		default: "Quiz Money - Rewarding Knowledge with Financial Income",
	},
	description: "Engage in quiz game and win amazing cash prices",
	generator: "Quiz Money",
	applicationName: "Quiz Money",
	keywords: ["Quiz Money", "make money online", "betting"],
	referrer: "origin-when-cross-origin",
	alternates: {
		canonical: "https://quizmoney.ng",
		languages: {
			"en-US": "/en-US",
		},
	},
	openGraph: {
		title: "Quiz Money - Rewarding Knowledge with Financial Income",
		description: "Engage in quiz game and win amazing cash prices",
		url: "https://quizmoney.ng",
		type: "website",
		locale: "en_US",
		images: [
			{
				url: "/opengraph-image.png",
				width: 1024,
				height: 1024,
				alt: "Quiz Money",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Quiz Money - Rewarding Knowledge with Financial Income",
		description: "Engage in quiz game and win amazing cash prices",
		images: ["/opengraph-image.png"],
	},
	robots: "index, follow",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<meta name="apple-mobile-web-app-title" content="Quiz Money" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
				/>
			</head>
			<body
				className={`${spacegrotesk.variable} ${dmsans.variable} antialiased`}>
				<AppConfig>{children}</AppConfig>
			</body>
		</html>
	);
}
