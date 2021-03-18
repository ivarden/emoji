import React from "react";
import Icons from "./icons";
import { CategoryType } from "./ts";

const Category = ({ category, id, name, fn }: CategoryType): JSX.Element => {
  return (
    <>
      {category.length ? (
        <Icons
          icons={category}
          title={{ id, name }}
          iconsFrequentlyHandler={fn}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default Category;
