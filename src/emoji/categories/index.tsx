import React from "react";
import icons from "./icons";
import IconCategory from "./IconCategory";
import s from "./style.module.scss";

const Categories: React.FC<any> = ({ inputRef, fn }): JSX.Element => {
  const [active, setActive] = React.useState(1);
  const setCategoryHandler = (id: number) => {
    setActive(id);
  };

  return (
    <div className={`${s.wrapper} `}>
      {icons.map((item, idx) => (
        <IconCategory
          icons={item}
          inputRef={inputRef[item.category]}
          fn={fn}
          active={active}
          setCategoryHandler={setCategoryHandler}
          key={idx}
        />
      ))}
    </div>
  );
};

export default Categories;
