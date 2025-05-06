import React from "react";
import SubTitle from "./Subtitle";

type Props = {
  topText?: string;
  title: string;
  icon?: string;
  topClassName?: string;
  titleClassName?: string;
  contentTextClassName?: string;
  contentText?: string;
};

export const SectionHeader = (props: Props) => {
  const {
    topText,
    icon,
    topClassName,
    title,
    titleClassName,
    contentTextClassName,
    contentText,
  } = props;
  return (
    <div className="space-y-4 mb-4">
      {topText && (
        <SubTitle text={topText} icon={icon} className={topClassName} />
      )}
      <h2
        data-aos="fade-up"
        className={`${
          titleClassName ? titleClassName : ""
        } text-2xl lg:text-3xl font-bold capitalize font-heading`}
      >
        {title}
      </h2>
      <p
        data-aos="fade-up"
        className={`${contentTextClassName ? contentTextClassName : ""} font-heading`}
      >
        {contentText}
      </p>
    </div>
  );
};
