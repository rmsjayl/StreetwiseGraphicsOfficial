import React from "react";
import "./Buttons.css";

const STYLE = [
	"btn--primary__solid",
	"btn--secondary__solid",
	"btn--registersandlogs",
];

const SIZES = ["btn--medium", "btn--large", "btn--registerlogins"];

export const Buttons = ({
	children,
	type,
	buttonStyle,
	buttonSize,
	onClick,
}) => {
	const checkButtonStyle = STYLE.includes(buttonStyle) ? buttonStyle : STYLE[0];

	const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

	return (
		<button
			className={`btn ${checkButtonStyle} ${checkButtonSize}`}
			type={type}
			onClick={onClick}
		>
			{children}
		</button>
	);
};
