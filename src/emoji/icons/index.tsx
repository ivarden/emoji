import React from "react";
import s from "./style.module.scss";

interface IconItem {
  codes: string;
  char: string;
  name: string;
}
type IconsType = {
  icons: Array<IconItem>;
  title: { id: string; name: string };
  iconsFrequentlyHandler: Function;
};

const Icons: React.FC<IconsType> = ({
  icons = [],
  title = { id: "1", name: "Title" },
  iconsFrequentlyHandler,
}): JSX.Element => {
  return (
    <div className={s.iconsWrap}>
      <span id={title.id}></span>
      <span className={s.title}>{title.name}</span>
      <div className={s.icons}>
        {icons.length > 0 ? (
          icons.map((item) => (
            <div
              className={s.iconWrap}
              key={item.codes}
              onClick={() => iconsFrequentlyHandler(item)}
            >
              <span className={s.icon} title={item.name}>
                {item.char}
              </span>
            </div>
          ))
        ) : (
          <h5 className={s.sorry}>Sorry there isn't an emoji for this</h5>
        )}
      </div>
    </div>
  );
};

export default Icons;
