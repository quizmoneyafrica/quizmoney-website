import PageLayout from "@/app/layout/pageLayout";
import React from "react";
import Image from "next/image";
import { CtaImage } from "../../../../public/page";
import useAppLink from "@/app/hooks/AppDownload";
import Link from "next/link";
import CustomImage from "./CustomImage";

function CtaSection() {
  const appLink = useAppLink();
  return (
    <PageLayout>
      <div className="grid grid-cols-1 pt-8 md:pt-5 lg:grid-cols-2 gap-8 lg:gap-12 my-16 px-4 md:px-8 rounded-3xl items-center bg-primary-900 hero">
        <div className="text-white space-y-8 text-center lg:text-left">
          <h2 className="text-xl md:text-3xl font-bold md:leading-tight">
            Ready to Challenge Your Wits? <br className="hidden lg:block" />
            Unleash the Fun! Test your knowledge.
          </h2>
          <p className="text-lg sm:text-xl opacity-90 max-w-2xl lg:max-w-none mx-auto">
            Embark on an exciting journey of endless trivia excitement. Get the
            App and Let the Games Begin!
          </p>
          <div className="  hidden md:flex flex-col sm:flex-row gap-6 justify-center lg:justify-start pt-4">
            <Link href={appLink}>
              <CustomImage alt="" src={"/play-store.svg"} className="" />
            </Link>
            <Link href={appLink}>
              <CustomImage alt="" src={"/app-store.svg"} className="" />
            </Link>
          </div>
          <div className=" flex flex-row  md:hidden gap-5 items-center pt-4">
            <Link href={appLink} className=" flex-1">
              <CustomImage alt="" src={"/play-small.svg"} className=" w-full" />
            </Link>
            <Link href={appLink} className=" flex-1">
              <CustomImage alt="" src={"/app-small.svg"} className=" w-full" />
            </Link>
          </div>
        </div>
        <div
          className="flex justify-center lg:justify-end"
          data-aos="fade-left"
        >
          <Image
            src={CtaImage}
            alt="Quiz Money App"
            width={500}
            height={600}
            priority
            className="w-[85%] lg:w-[90%] max-w-[550px] drop-shadow-2xl"
          />
        </div>
      </div>
    </PageLayout>
  );
}

export default CtaSection;
