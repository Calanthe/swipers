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
                <p className="overlay__title">{title}</p>
				<div className="overlay__text">
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
