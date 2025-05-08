import About from "./components/pages/home/About";
import Cta from "./components/pages/home/Cta";
import Faqs from "./components/pages/home/Faqs";
import Features from "./components/pages/home/Features";
import HeroSection from "./components/pages/home/HeroSection";
import HowItWorks from "./components/pages/home/HowItWorks";
import Inspiration from "./components/pages/home/Inspiration";
import Reviews from "./components/pages/home/Reviews";

export default function Home() {
	return (
		<main className="lg:mt-2">
			<HeroSection />
			<About />
			<Inspiration />
			<Features />
			<HowItWorks />
			<Reviews />
			<Faqs />
			<Cta />
		</main>
	);
}
