import { memo } from "react";
import { Icon } from "../../common/Icon";
import "./styles/Tag.scss";

export const Tag = memo(function Tag(props: { text?: string }) {
  return (
    <div className="tag">
      {props.text ? <span>{props.text}</span> : <div className="tag__dots"><Icon name="dots" /></div>}
    </div>
  );
});
