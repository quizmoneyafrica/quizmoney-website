import { data } from "@/app/data/content";
import PageLayout from "@/app/layout/pageLayout";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Footer() {
  const date = new Date();
  return (
    <>
      <footer className="bg-black pt-10 pb-6">
        <PageLayout>
          <div>
            <section className="pb-6">
              <div className="grid grid-cols-2 lg:grid-cols-5 gap-y-10 place-items-start lg:place-items-stretch">
                <Image
                  src="/logo.svg"
                  alt="Quiz Money"
                  width={56}
                  height={30.4}
                  priority
                  className="w-[25%] lg:w-[40%] col-span-2 lg:col-span-1"
                />
                  {data.footerMenus.map((item, index) => {
                    return (
                      <ul key={index} className="text-left w-full flex-1 space-y-2">
                        <li className="text-neutral-400 mb-4 text-sm">{item.title}</li>
                        {item.links.map((link, index) => {
                          return (
                            <li key={index}>
                              <Link
                                href={link.url}
                                className={`text-neutral-50`}
                              >
                                {link.text}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    );
                  })}
              </div>
            </section>
            <div className="pb-2 pt-6 text-center text-[#ACACAC] border-t border-[#353535]">
              <p>
                &copy; {date.getFullYear()}.{" "}
                <a href="https://quizmony.ng" title="Quiz Money">
                  Quiz Money
                </a>
              </p>
            </div>
          </div>
        </PageLayout>
      </footer>
    </>
  );
}

export default Footer;
