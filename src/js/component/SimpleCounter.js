import React from "react";
import { NumberContainer } from "./NumberContainer";
import PropTypes from "prop-types";

export const SimpleCounter = props => {
	return (
		<div className="row d-flex justify-content-around counter">
			<div className="col-1 number-container">clock</div>
			<React.Fragment>
				<NumberContainer
					digit={Math.floor(props.seconds / 100000) % 10}
				/>
				<NumberContainer
					digit={Math.floor(props.seconds / 10000) % 10}
				/>
				<NumberContainer
					digit={Math.floor(props.seconds / 1000) % 10}
				/>
				<NumberContainer digit={Math.floor(props.seconds / 100) % 10} />
				<NumberContainer digit={Math.floor(props.seconds / 10) % 10} />
				<NumberContainer digit={Math.floor(props.seconds % 10)} />
			</React.Fragment>
		</div>
	);
};

SimpleCounter.propTypes = {
	seconds: PropTypes.number
};
