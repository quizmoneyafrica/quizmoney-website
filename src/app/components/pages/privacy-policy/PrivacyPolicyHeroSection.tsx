"use client";
import PageLayout from "@/app/layout/pageLayout";
import React from "react";
import SubTitle from "../../Subtitle";
import Link from "next/link";

function PrivacyPolicyHeroSection() {
  return (
    <PageLayout>
      <HeroContainer>
        <div className=" w-full pb-8 space-y-5">
          <h1 className="drop-shadow-md text-xl sm:text-2xl md:text-3xl font-bold px-4">
            Privacy policy
          </h1>
          <p className="drop-shadow-md text-sm sm:text-md md:text-lg mx-auto w-[90%] sm:w-[80%] md:max-w-[60%] lg:max-w-[40%] px-4">
            Last Updated 30 April, 2024
          </p>
        </div>
      </HeroContainer>
    </PageLayout>
  );
}

export default PrivacyPolicyHeroSection;

type Props = {
  children: React.ReactNode;
};

export const HeroContainer = (props: Props) => {
  const { children } = props;
  return (
    <section className="relative bg-primary-900 rounded-[15px] sm:rounded-[25px] md:rounded-[50px] lg:rounded-[100px] px-2 sm:px-3 md:px-4 pt-6 sm:pt-8 md:py-16 mb-8 sm:mb-12 md:mb-16 mt-6 lg:mb-20 text-neutral-50 text-center space-y-6 sm:space-y-8 hero">
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
