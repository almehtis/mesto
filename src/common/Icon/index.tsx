import { memo } from "react";

const iconNames = [
  "arrow-inside-circle",
  "arrow-right",
  "cross",
  "dots",
  "eye",
  "gloube",
  "habmurger-menu",
  "large-logo",
  "logo",
  "six",
  "snowflake",
  "star"
] as const;

export type IconType = typeof iconNames[number];

export const Icon = memo(function Icon(props: {
  className?: string
  name: string
  onClick?: () => void
}) {
  return (
    <img
      className={props.className}
      src={`./icons/${props.name}.svg`}
      alt={`${props.name} icon`}
      onClick={props.onClick}
    />
  );
});