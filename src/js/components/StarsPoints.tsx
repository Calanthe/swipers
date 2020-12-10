import React from "react";

interface Props {
	score: number;
    level: number;
    customCssClass?: string | null;
}

const StarsPoints: React.FunctionComponent<Props> = ({
	score,
    level,
    customCssClass,
}) => {
	let i = 0,
		totalStarsAmount = 3,
		uniqueKey = "",
		stars = [];

	for (i = 1; i <= totalStarsAmount; i++) {
		uniqueKey = `star_${level}_${i}`;
		if (i <= score) {
			stars.push(<i className="fas fa-star" key={uniqueKey}></i>);
		} else {
			stars.push(<i className="far fa-star" key={uniqueKey}></i>);
		}
	}

	return (
		<div className={customCssClass}>
            {stars}
		</div>
	);
};

export default StarsPoints;
