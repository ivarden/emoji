import React from "react";
import Category from "./IconsCategory";
import { CategoryType } from "../ts";

const Container = ({ category, id, name, fn }: CategoryType): JSX.Element => {
  return (
    <>
      {category.length ? (
        <Category
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

export default Container;
