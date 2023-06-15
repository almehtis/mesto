import { memo, useState } from "react";
import cn from 'classnames'
import "./styles/Button.scss";

export const Button = memo(function Button(props: {
  classname?: string
  hasGradientBackground?: boolean;
  text: string;
}) {
  const [hover, setHover] = useState(true);

  return (
    <button
      onMouseEnter={() => {
        setHover(true)
      }}
      onMouseLeave={() => {
        setHover(false)
      }}
      className={cn(props.hasGradientBackground ? "gradient-button" : "button", props.classname)}
      type="button"
    >
      {props.hasGradientBackground ? (
          <span>{props.text}</span>
      ) : (
        <>
          <span className={hover ? "button__label-down" : "button__label-down_animated"}>
            {props.text}
          </span>
          <span className="button__label-up">{props.text}</span>
        </>
      )}
    </button>
  )
})
