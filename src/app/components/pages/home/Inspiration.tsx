import PageLayout from "@/app/layout/pageLayout";
import React from "react";
import { BoxWithImage } from "./About";

function Inspiration() {
  return (
    <>
      <section className="bg-white py-16 lg:py-20">
        <PageLayout>
          <div className="bg-neutral-900 rounded-[25px] lg:rounded-[50px] px-4 py-20 lg:px-6 lg:py-6 grid grid-cols-1 lg:grid-cols-2 gap-y-14 gap-x-10 lg:place-items-center">
            <div className="inspiration text-white py-4 space-y-6 text-center lg:order-2 lg:flex lg:flex-col lg:items-start lg:justify-center lg:h-full">
              <h2 data-aos="fade-up" className="text-2xl font-bold ">
                Our Inspiration
              </h2>
              <p data-aos="fade-up" className="lg:text-start">
                The inspiration behind Quiz Money came from our passion for
                trivia and our desire to bring people together through shared
                experiences. We wanted to create a game that not only entertains
                but also educates, sparking curiosity and igniting a love for
                learning in players of all ages.
              </p>
            </div>

            <BoxWithImage
              src="/assets/inspiration.png"
              className="bg-white lg:order-1 lg:rounded-[20px]"
            />
          </div>
        </PageLayout>
      </section>
    </>
  );
}

export default Inspiration;
