import React from "react";
import s from "./iconsContainer.module.scss";

interface IconItem {
  codes: string;
  char: string;
  name: string;
}
type Icons = { icons: Array<IconItem> };

const IconsContainer: React.FC<Icons> = ({ icons = [] }): JSX.Element => {
  return (
    <div className={s.iconsWrap}>
      <span className={s.title}>Frequently used</span>
      <div className={s.icons}>
        {icons.length > 0 ? (
          icons.map((item) => (
            <span className={s.icon} title={item.name} key={item.codes}>
              {item.char}
            </span>
          ))
        ) : (
          <h5>Sorry there isn't an emoji for this</h5>
        )}
      </div>
    </div>
  );
};

export default IconsContainer;
