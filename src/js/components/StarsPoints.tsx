import React from "react";
import { connect } from "react-redux";

interface Props {
	score: number;
	level: number
}

const mapStateToProps = (state) => {
	return {};
};

const StarsPoints: React.FunctionComponent<Props> = ({
	score,
	level,
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
		<div className="stars-points">
            {stars}
		</div>
	);
};

export default connect(mapStateToProps)(StarsPoints);
