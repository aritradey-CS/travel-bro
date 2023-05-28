import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";


const STYLE = ['btn--primary', 'btn--outline', 'btn--test'];

const SIZE = ['btn--medium', 'btn--large'];


export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
}) => {
  const checkButtonStyle = STYLE.includes(buttonStyle) ? buttonStyle : SIZE[0];

  const checkButtonSize = SIZE.includes(buttonSize) ? buttonSize : SIZE[0];

  return (
    <Link to="./sign-up" className="btn-mobile">
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};
