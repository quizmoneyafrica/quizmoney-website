"use client";
import PageLayout from "@/app/layout/pageLayout";
import React, { useState } from "react";
import SearchBar from "./SearchBar";
import SubTitle from "../../Subtitle";
import { data } from "@/app/data/content";
import Link from "next/link";

function FaqHeroSection() {
  const [searchValue, setSearchValue] = useState("");
  const [filteredFaqs, setFilteredFaqs] = useState(data.faq);
  console.log("====================================");
  console.log(filteredFaqs);
  console.log("====================================");
  const handleSearch = () => {
    if (!searchValue.trim()) {
      setFilteredFaqs(data.faq);
      return;
    }

    const searchTerm = searchValue.toLowerCase();
    const filtered = data.faq.filter(
      (faq) =>
        faq.question.toLowerCase().includes(searchTerm) ||
        faq.answer.toLowerCase().includes(searchTerm)
    );
    setFilteredFaqs(filtered);
  };

  return (
    <PageLayout>
      <HeroContainer>
        <SubTitle icon="" text="Stay connected with us" />
        <h1 className="drop-shadow-md text-xl sm:text-2xl md:text-3xl font-bold px-4">
          Frequently Asked <br className="sm:hidden" />
          Questions
        </h1>
        <p className="drop-shadow-md text-sm sm:text-md md:text-lg mx-auto w-[90%] sm:w-[80%] md:max-w-[60%] lg:max-w-[40%] px-4">
          Get answered to all questions you might{" "}
          <br className="hidden sm:block" /> want to ask
        </p>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="gap-4 mx-auto w-[90%] sm:w-[80%] md:max-w-[60%] lg:max-w-[40%] pb-8 sm:pb-10 md:pb-14"
        >
          <SearchBar
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onSearch={handleSearch}
          />
        </div>
      </HeroContainer>
    </PageLayout>
  );
}

export default FaqHeroSection;

type Props = {
  children: React.ReactNode;
};

export const HeroContainer = (props: Props) => {
  const { children } = props;
  return (
    <section className="relative bg-primary-900 rounded-[15px] sm:rounded-[25px] md:rounded-[50px] lg:rounded-[100px] px-2 sm:px-3 md:px-4 pt-6 sm:pt-8 md:pt-10 mb-8 sm:mb-12 md:mb-16 lg:mb-20 text-neutral-50 text-center space-y-6 sm:space-y-8 hero">
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
