//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { Home } from "./component/home.js";

import { SimpleCounter } from "./component/SimpleCounter.js";

import { Button } from "./component/Button.js";

let seconds = 0;
//render your react application

function renderRoutine() {
	ReactDOM.render(
		<div className="container-fluid">
			<SimpleCounter seconds={seconds} />
			<Button text="stop" method={stopper} />
		</div>,
		document.querySelector("#app")
	);
	seconds++;
}

function TimedRender() {
	setInterval(renderRoutine, 1000);
}

const myRenderer = TimedRender;

const stopper = e => {
	clearTimeout(myRenderer);
};

myRenderer();
