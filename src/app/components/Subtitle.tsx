import React from "react";

interface ISubTitleProps {
  text?: string;
  icon?: string;
  className?: string;
}

const SubTitle: React.FunctionComponent<ISubTitleProps> = (props) => {
  const { text, icon, className } = props;
  return (
    <div
      data-aos="zoom-in"
      data-aos-easing="linear"
      data-aos-duration="1500"
      className={`flex items-center gap-3 justify-center rounded-full px-4 py-2 bg-primary-50 text-primary-900 mx-auto w-full max-w-[80%] sm:max-w-[65%] md:max-w-[30%] lg:max-w-[22%] ${
        className ? className : ""
      }`}
    >
      {icon && <i className={`bi bi-${icon} animate-spin`}></i>}

      <h3>{text}</h3>
    </div>
  );
};

export default SubTitle;
