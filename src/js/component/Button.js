import React from "react";
import PropTypes from "prop-types";

export function Button(props) {
	return (
		<button className="btn btn-dark btn-lg" onClick={props.method}>
			{props.text}
		</button>
	);
}

Button.propTypes = {
	method: PropTypes.func,
	text: PropTypes.string
};
