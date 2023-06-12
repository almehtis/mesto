import { memo } from "react";

const iconNames = [
  "arrow-inside-circle",
  "arrow-right",
  "dots",
  "eye",
  "gloube",
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
}) {
  return (
    <img
      src={`/icons/${props.name}.svg`}
      alt={`${props.name} icon`}
    />
  );
});