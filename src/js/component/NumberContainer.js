import React from "react";
import PropTypes from "prop-types";

export function NumberContainer(props) {
	return <div className="col-1">{props.digit}</div>;
}

NumberContainer.propTypes = {
	digit: PropTypes.number
};
