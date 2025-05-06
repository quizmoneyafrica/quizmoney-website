import PageLayout from "@/app/layout/pageLayout";
import Link from "next/link";
import React from "react";
import SubTitle from "../../Subtitle";
import Image from "next/image";
import { HeroPhoneMobile } from "../../../../../public/page";
import useAppLink from "@/app/hooks/AppDownload";

function HeroSection() {
  const appLink = useAppLink();
  return (
    <PageLayout>
      <HeroContainer>
        <SubTitle icon="stars" text="Play and Win Rewards" />

        <h1 className="drop-shadow-md text-2xl sm:text-3xl">
          Turn Knowledge into <br />
          Rewards!
        </h1>
        <p className="drop-shadow-md text-md sm:text-lg mx-auto md:max-w-[60%] lg:max-w-[40%]">
          Challenge yourself, compete with friends, and win real rewards with
          the ultimate trivia experience.
        </p>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 mx-auto md:max-w-[60%] lg:max-w-[40%]"
        >
          <AppStoreBtn
            icon="google-play"
            store="Google Play"
            title="GET IT ON"
            url={appLink}
          />
          <AppStoreBtn
            icon="apple"
            store="App Store"
            title="Download on the"
            url={appLink}
          />
        </div>

        <div className="pt-4 flex items-center justify-center mx-auto md:max-w-[60%] lg:max-w-[40%]">
          <Image
            data-aos="zoom-in"
            data-aos-duration="1500"
            src={HeroPhoneMobile}
            alt="Quiz Money"
            width={919}
            height={648}
            priority
            className=""
          />
        </div>
      </HeroContainer>
    </PageLayout>
  );
}

export default HeroSection;

type Props = {
  children: React.ReactNode;
};
export const HeroContainer = (props: Props) => {
  const { children } = props;
  return (
    <section
      className="relative bg-primary-900 rounded-[25px] md:rounded-[50px] lg:rounded-[100px] px-4 pt-10 mb-16 lg:mb-20 text-neutral-50 text-center space-y-8 hero"
    >
      {children}
    </section>
  );
};

type StoreBtnProps = {
  title: string;
  store: string;
  url: string;
  icon: string;
};
export const AppStoreBtn = (props: StoreBtnProps) => {
  const { title, store, url, icon } = props;
  return (
    <Link
      href={url}
      className="bg-neutral-900 h-16 p-4 w-full inline-flex items-center justify-center gap-4 rounded-full "
    >
      <i className={`bi bi-${icon} text-2xl`}></i>

      <div className="text-left font-heading font-bold">
        <span className="text-xs ">{title}</span>
        <br />
        <span className="">{store}</span>
      </div>
    </Link>
  );
};
