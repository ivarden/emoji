import React from "react";
import icons from "./icons";
import { NavHashLink } from "react-router-hash-link";

import s from "./style.module.scss";

const Categories: React.FC = (): JSX.Element => {
  const [active, setActive] = React.useState(1);
  const setCategoryHandler = (id: number) => {
    setActive(id);
  };

  const categories = icons.map((item) => (
    <div
      className={`${s.icon} ${active === item.id ? s.active : ""}`}
      key={item.id}
      onClick={() => setCategoryHandler(item.id)}
    >
      <NavHashLink to={`/#${item.category}`}>
        <button title={item.title}>{item.icon}</button>
      </NavHashLink>
    </div>
  ));
  return <div className={`${s.wrapper} `}>{categories}</div>;
};

export default Categories;
