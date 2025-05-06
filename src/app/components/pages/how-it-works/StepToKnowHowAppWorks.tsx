import React from "react";
import { SectionHeader } from "../../SectionHeader";
import PageLayout from "@/app/layout/pageLayout";
import Image from "next/image";
import { cn } from "@/app/utils/utils";

type StepProps = {
  number: number;
  title: string;
  description: string;
  imageSrc?: string;
  bgColorClass?: string;
  textColorClass?: string;
  numberColor?: string;
};

const Step = ({
  number,
  title,
  description,
  imageSrc,
  bgColorClass = "bg-neutral-50",
  textColorClass = "text-neutral-900",
  numberColor = "bg-primary-900",
}: StepProps) => {
  return (
    <div
      data-aos="fade-up"
      className={`${bgColorClass} rounded-2xl p-6 space-y-4`}
    >
      <div
        className={cn(
          `w-[50px] h-[50px] rounded-full grid place-items-center font-bold text-white text-xl`,
          numberColor
        )}
      >
        <span>{number}</span>
      </div>
      <h3 className={`font-bold text-xl ${textColorClass}`}>{title}</h3>
      <p className={textColorClass}>{description}</p>
      {imageSrc && (
        <div className="mt-4">
          <Image
            src={imageSrc}
            alt={title}
            width={365}
            height={82}
            className="w-full max-w-[365px] mx-auto"
          />
        </div>
      )}
    </div>
  );
};

export default function StepToKnowHowAppWorks() {
  const steps: StepProps[] = [
    {
      number: 1,
      title: "Sign up on Quiz-Money by creating your account.",
      description:
        "Register an account with your username and password to get started on the App.",
      imageSrc: "/step1.svg",
      bgColorClass: "bg-[#E4F1FA]",
      textColorClass: "text-primary-900",
    },
    {
      number: 2,
      title: "Login to see when the next game quiz is going to be",
      description:
        "Login to see when the next game quiz is going to be taken place and pay an entry fee.",
      imageSrc: "/step2.svg",
      bgColorClass: "bg-[#C4FBD2]",
      textColorClass: "text-[[#009028]]",
      numberColor: " bg-[#009028]",
    },
    {
      number: 3,
      title: "Share with your friends to play with them.",
      description:
        "Login to see when the next game quiz is going to be taken place and pay an entry fee.",
      imageSrc: "/step3.svg",
      bgColorClass: "bg-[#DFF9FF]",
      textColorClass: "text-[#006E7D]",
      numberColor: " bg-[#006E7D]",
    },
    {
      number: 4,
      title: "Get notified Before the start of the game.",
      description:
        "When it time, you will get a notification to start the game by pressing the play button.",
      imageSrc: "/step4.svg",
      bgColorClass: "bg-[#F6E4F6]",
      textColorClass: "text-[#55068A]",
      numberColor: " bg-[#55068A]",
    },
    {
      number: 5,
      title: "Start the game, time allotted for a question is 10secs.",
      description:
        "Start the game. Answer each question as fast as you can to get a chance of wining the prize",
      imageSrc: "/step5.svg",
      bgColorClass: "bg-[#FFFCE7]",
      textColorClass: "text-[#F8B93C]",
      numberColor: " bg-[#F8B93C]",
    },
    {
      number: 6,
      title: "The game has a lifeline feature called erasers,",
      description:
        "Erasers allows players to correct wrong answers by selecting the option to remove.",
      imageSrc: "/step6.svg",
      bgColorClass: "bg-[#E9E9E9]",
      textColorClass: "text-[#F8B93C]",
      numberColor: "bg-[#1B1B1B]",
    },
  ];

  return (
    <PageLayout>
      <section className="py-16 space-y-6 lg:py-8">
        <div className="text-center mx-auto lg:w-[70%]">
          <SectionHeader
            topText={undefined}
            icon={undefined}
            topClassName="bg-primary-50 text-primary-900"
            title="6 amazing steps to know how the Quiz money app works"
            titleClassName="text-primary-900 font-bold"
            contentText="Dive into a world of challenges and rewards with our game's unique features."
          />
        </div>

        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <Step key={index} {...step} />
          ))}
        </div>
      </section>
    </PageLayout>
  );
}
