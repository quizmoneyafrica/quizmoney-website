import PageLayout from "@/app/layout/pageLayout";
import Image from "next/image";
import React from "react";
import { SectionHeader } from "../../SectionHeader";

function About() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <PageLayout>
        <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center gap-y-10 ">
          <div>
            <div className="text-center lg:text-left lg:w-[70%]">
              <SectionHeader
                title="About The App"
                contentText="Where trivia meets excitement and knowledge becomes a game!"
                titleClassName=""
                contentTextClassName="text-primary-900 text-lg font-medium "
              />
              <p data-aos="fade-up-right" className="">
                At Quiz Money, we believe that learning should be fun and
                engaging. That&apos;s why we created our trivia game app to
                provide users with a platform where they can test their
                knowledge, challenge their friends, and unlock new realms of
                information, all while having a blast!
              </p>
            </div>
          </div>
          <BoxWithImage
            src="/assets/home-about.png"
            className="bg-primary-50"
          />
        </div>
      </PageLayout>
    </section>
  );
}

export default About;

type Props = {
  className: string;
  src: string;
};

export const BoxWithImage = (props: Props) => {
  const { src, className } = props;
  return (
    <div
      data-aos="fade-up"
      className={`${
        className ? className : ""
      } flex items-center justify-center rounded-[10px] lg:rounded-[50px] pt-16 lg:pt-20 h-full w-full overflow-clip`}
    >
      <Image
        data-aos="zoom-in"
        data-aos-duration="1500"
        src={src}
        alt="Quiz money"
        width={350}
        height={485.01}
      />
    </div>
  );
};
