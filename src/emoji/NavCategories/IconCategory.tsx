import React from "react";
import s from "./style.module.scss";

const Categories: React.FC<any> = ({
  icons,
  inputRef,
  fn,
  active,
  setCategoryHandler,
}): JSX.Element => {
  const onClickHandler = () => {
    setCategoryHandler(icons.id);
    fn(inputRef);
  };

  return (
    <div
      className={`${s.icon} ${active === icons.id ? s.active : ""}`}
      key={icons.id}
      onClick={onClickHandler}
      ref={inputRef}
      title={icons.title}
    >
      <button title={icons.title}>{icons.icon}</button>
    </div>
  );
};

export default Categories;
