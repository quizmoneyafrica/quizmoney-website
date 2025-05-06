import * as React from "react";

interface IPageLayoutProps {
	children: React.ReactNode;
}

const PageLayout: React.FunctionComponent<IPageLayoutProps> = (props) => {
	const { children } = props;
	return (
		<div className="w-full max-w-screen-xl mx-auto px-4 relative">
			{children}
		</div>
	);
};

export default PageLayout;
