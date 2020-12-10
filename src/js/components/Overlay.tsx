import React from "react";

interface Props {
	overlayClass: string;
    overlayWrapperClass: string;
    title: JSX.Element[] | JSX.Element | string;
    text: JSX.Element[] | JSX.Element | string;
    buttons: JSX.Element[] | JSX.Element | string;
}

const Overlay: React.FunctionComponent<Props> = ({
	overlayClass,
    overlayWrapperClass,
	title,
    text,
    buttons
}) => {
	return (
		<div>
			<div className={overlayWrapperClass}></div>
			<div className={overlayClass}>
                <p className="title">{title}</p>
				<div className="text">
					{text}
				</div>
				<div>
					{buttons}
				</div>
			</div>
		</div>
	);
};

export default Overlay;
