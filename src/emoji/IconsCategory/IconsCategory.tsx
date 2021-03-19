import React from "react";
import { IconType, CategoryType } from "../ts";
import s from "./style.module.scss";

const IconsCategory: React.FC<CategoryType | any> = ({
  category,
  name,
  fn,
  inputRef,
}): JSX.Element => {
  return (
    <div className={s.iconsWrap} ref={inputRef}>
      <span className={s.title}>{name}</span>
      <div className={s.icons}>
        {category.length ? (
          category.map((item: IconType) => (
            <div
              className={s.iconWrap}
              key={item.codes}
              onClick={() => fn(item)}
            >
              <span className={s.icon} title={item.name}>
                {item.char}
              </span>
            </div>
          ))
        ) : (
          <h5 className={s.sorry}>Sorry there is not an emoji for this</h5>
        )}
      </div>
    </div>
  );
};

export default IconsCategory;
