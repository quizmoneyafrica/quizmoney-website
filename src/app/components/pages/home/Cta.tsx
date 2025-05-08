import PageLayout from "@/app/layout/pageLayout";
import React from "react";
import { AppStoreBtn, HeroContainer } from "./HeroSection";
import Image from "next/image";
import { CtaImage } from "../../../../../public/page";
import useAppLink from "@/app/hooks/AppDownload";

function Cta() {
	return (
		<>
			<PageLayout>
				<HeroContainer>
					<h2 className="drop-shadow-md text-xl font-bold">
						Ready to Challenge Your Wits? Unleash the Fun! Test your knowledge.
					</h2>
					<p className="drop-shadow-md text-md sm:text-lg mx-auto md:max-w-[60%] lg:max-w-[40%]">
						Embark on an exciting journey of endless trivia excitement. Get the
						App and Let the Games Begin!
					</p>
					<div
						data-aos="fade-up"
						data-aos-duration="1000"
						className="grid grid-cols-1 gap-4 mx-auto md:max-w-[60%] lg:max-w-[40%]">
						<AppStoreBtn
							icon="controller"
							store="Login/Signup"
							title="GET STARTED"
							url={useAppLink()}
						/>
						{/* <AppStoreBtn
              icon="google-play"
              store="Google Play"
              title="GET IT ON"
              url="https://"
            /> */}
						{/* <AppStoreBtn
              icon="apple"
              store="App Store"
              title="Download on the"
              url="https://"
            /> */}
					</div>

					<div className="pt-4 flex items-center justify-center mx-auto md:max-w-[60%] lg:max-w-[40%]">
						<Image
							data-aos="zoom-in"
							data-aos-duration="1500"
							src={CtaImage}
							alt="Quiz Money"
							width={919}
							height={648}
							priority
							className=""
						/>
					</div>
				</HeroContainer>
			</PageLayout>
		</>
	);
}

export default Cta;
