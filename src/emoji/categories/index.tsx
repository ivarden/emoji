import React from "react";
import icons from "./icons";
import s from "./style.module.scss";

const Categories: React.FC = (): JSX.Element => {
  const [active, setActive] = React.useState(1);
  const onClickHandler = (id: number) => {
    setActive(id);
  };

  const categories = icons.map((item) => (
    <div
      className={`${s.icon} ${active === item.id ? s.active : ""}`}
      key={item.id}
      onClick={() => onClickHandler(item.id)}
    >
      {/* <a href={item.category}><button title={item.title}> {item.icon}</button></a> */}
      <a href={`#${item.category}`} ><button title={item.title}> {item.icon}</button></a>
    </div>
  ));
  return <div className={`${s.wrapper} `}>{categories}</div>;
};

export default Categories;
